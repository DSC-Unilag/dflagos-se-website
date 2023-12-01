import React, { useEffect, useState } from "react";
import { breakoutSessionData } from "../../constants";
import { ArrowRight2 } from "../../assets";
import useSessionData from "../../../utils/useSessionData";
import { ColorRing } from "react-loader-spinner";

const BreakoutSession = ({ handleAddId, sessionId, data }) => {
  const [isSelected, setIsSelected] = useState(false);

  const [checkedStates, setCheckedStates] = useState([false, false, false]);

  const handleChange = (e, index, id) => {
    const updatedCheckedStates = checkedStates.map((state, i) =>
      i === index ? !state : state
    );
    setCheckedStates(updatedCheckedStates);
    handleAddId(e, id);
  };

  console.log(data);

  const filteredData = data?.filter((item) => item.id >= 0 && item.id <= 3);

  return (
    <div>
      <div className="p-[10px] py-[30px] border-[2px] border-dashed border-[#0D0D0D] mt-[24px] mb-[40px] rounded-[16px]">
        <button className="bg-[#F9AB00] border-2 border-[#0d0d0d] font-bold py-[8px] px-[16px] rounded-[8px] text-[#000] mb-[16px]">
          Breakout Session 1{" "}
        </button>
        {filteredData ? (
          filteredData.map(({ speaker, time, title, color }) => {
            return (
              <div
                className={`py-[50px] px-[24px] flex justify-center items-center rounded-[24px] w-[300px] h-[440px] text-[#fff]  ${color} xl:mx-0 hidden min-[768px]:flex`}
                key={speaker}
              >
                <div className="">
                  <p className="text-[14px] leading-[21px] tracking-[0.14px] mb-8">
                    {time}
                  </p>
                  <p className="text-2xl font-bold leading-9 tracking-[0.24px] lg:text-[24px] mb-4">
                    {title}
                  </p>
                  <p className="text-base leading-6 tracking-[0.16px] mt-[8px]">
                    {speaker}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        )}
      </div>
    </div>
  );
};

export default BreakoutSession;
