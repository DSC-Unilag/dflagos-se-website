import React, { useState } from "react";
import { Tabs } from "../../constants";
import "../../App.css";

const Tab = () => {
  const [indexState, setIndexState] = useState(0);
  const handleClick = (index) => {
    setIndexState(index);
  };
  return (
    <div className="tab mt-[49px] w-full">
      <div className="flex bg-[#FDE293] overflow-x-auto border-4 p-4 border-[#0d0d0d] rounded-[16px]">
        {Tabs.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`text-[18px] mr-10 shrink-0 ${
              index == indexState
                ? "bg-[#F9AB00] px-4 py-2 rounded-[8px] border-2 border-[#0d0d0d] font-bold text-[#000]  tab-button"
                : "tab-button"
            }`}
          >
            {item.content}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;
