import React, { useEffect, useRef, useState } from "react";
import "./../styles/stacker.css";
import { stats } from "../constants";

export const ScheduleStack = () => {
  const [boxes, setBoxes] = useState(stats);
  const removeTopCard = () => {
    const DOMBoxes = document.querySelectorAll(".box");

    for (let i = 0; i < DOMBoxes.length; i++) {
      let box = DOMBoxes[i];
      if (i == 0) {
        box.classList.add("close");
      } else {
        box.classList.remove(`pos-${i}`);
        box.classList.add(`pos-${i - 1}`);
      }
    }

    setTimeout(() => {
      setBoxes((boxes) => {
        const boxesClone = Array.from(boxes);
        const firstBox = boxesClone.shift();
        return [...boxesClone, firstBox];
      });
    }, 500);
  };

  useEffect(() => {
    const mainBox = document.querySelector(".stacker.wrapper main");
    let startX = 0;
    let startY = 0;
    let threshold = 30;
    const startFn = (e) => {
      const touchObj = e.changedTouches[0];
      startX = touchObj.clientX;
      startY = touchObj.clientY;
    };
    const endFn = (e) => {
      const touchObj = e.changedTouches[0];
      let diffX = Math.abs(touchObj.clientX - startX);
      let diffY = Math.abs(touchObj.clientY - startY);
      console.log(diffX, diffY);
      if (diffX >= threshold) {
        removeTopCard();
      }
    };
    mainBox?.addEventListener("touchstart", startFn);
    mainBox?.addEventListener("touchmove", (e) => {
      e.preventDefault();
    });
    mainBox?.addEventListener("touchend", endFn);
  }, []);

  return (
    <div className="stacker wrapper overflow-x-hidden w-screen min-[768px]:hidden">
      <main>
        {boxes.map((item, idx) => {
          const { speaker, time, title, color } = item;
          return (
            <div
              className={`py-[50px] px-[24px] flex justify-center items-center rounded-[24px] w-[300px] h-[440px] text-[#fff]  ${color} xl:mx-0 box pos-${idx}`}
              key={speaker}
            >
              <div className="">
                <p className="text-[14px] leading-[21px] tracking-[0.14px] mb-8 font-normal">
                  {time}
                </p>
                <p className="text-2xl font-bold leading-9 tracking-[0.24px] lg:text-[24px] mb-4">
                  {title}
                </p>
                <p className="text-base leading-6 tracking-[0.16px] mt-[8px] font-normal">
                  {speaker}
                </p>
              </div>
            </div>
          );
        })}

        <div
          className={`py-[50px] px-[24px] flex justify-center items-center rounded-[24px] w-[300px] h-[440px] text-[#fff]  ${boxes[0].color} xl:mx-0 box pos-${boxes.length}`}
          key={boxes[0].speaker}
        >
          <div className="">
            <p className="text-[14px] leading-[21px] tracking-[0.14px] mb-8">
              {boxes[0].time}
            </p>
            <p className="text-2xl font-bold leading-9 tracking-[0.24px] lg:text-[24px] mb-4">
              {boxes[0].title}
            </p>
            <p className="text-base leading-6 tracking-[0.16px] mt-[8px]">
              {boxes[0].speaker}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
