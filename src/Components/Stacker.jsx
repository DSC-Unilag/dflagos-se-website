import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const defaultBoxes = [
  {
    color: "red",
    name: "Red",
  },
  {
    color: "green",
    name: "Green",
  },
  {
    color: "blue",
    name: "Blue",
  },
];

export const ScheduleStack = () => {
  const [boxes, setBoxes] = useState(defaultBoxes);
  const removeTopCard = () => {
    const box1 = document.querySelector(".pos-0");
    const box2 = document.querySelector(".pos-1");
    const box3 = document.querySelector(".pos-2");
    const box4 = document.querySelector(".pos-3");

    box1?.classList.add("close");
    box2?.classList.remove("pos-1");
    box2?.classList.add("pos-0");
    box3?.classList.remove("pos-2");
    box3?.classList.add("pos-1");
    box4?.classList.remove("pos-3");
    box4?.classList.add("pos-2");
    setTimeout(() => {
      setBoxes((boxes) => {
        const boxesClone = Array.from(boxes);
        const firstBox = boxesClone.shift();
        return [...boxesClone, firstBox];
      });
    }, 500);
  };

  useEffect(() => {
    const box1 = document.querySelector("main");
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
    box1?.addEventListener("touchstart", startFn);
    box1?.addEventListener("touchend", endFn);
  }, []);

  return (
    <div className="wrapper">
      <main>
        {boxes.map(
          (box, idx) =>
            (idx === 0 || idx === 1 || idx === 2) && (
              <div key={box.name} className={`box ${box.color} pos-${idx}`}>
                {box.name}
              </div>
            )
        )}
        <div key={boxes[0].name} className={`box ${boxes[0].color} pos-3`}>
          {boxes[0].name}
        </div>
      </main>
    </div>
  );
};
