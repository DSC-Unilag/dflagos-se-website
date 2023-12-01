import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import checkmark from "./../../assets/tick.png";

export const BreakoutSession = ({ handleAddId, locationId, sessions }) => {
  const [isSelected, setIsSelected] = useState(false);

  const [checkedStates, setCheckedStates] = useState([false, false, false]);

  const handleChange = (e, index, id) => {
    const updatedCheckedStates = checkedStates.map((state, i) =>
      i === index ? !state : state
    );
    setCheckedStates(updatedCheckedStates);
    handleAddId(e, id);
  };

  const locationSessions = sessions?.filter(
    (session) => session.session_id == locationId
  );

  return (
    <div>
      <div className="p-[10px] py-[30px] border-[2px] border-dashed border-[#0D0D0D] mt-[24px] mb-[40px] rounded-[16px]">
        <button className="bg-[#F9AB00] border-2 border-[#0d0d0d] font-bold py-[8px] px-[16px] rounded-[8px] text-[#000] mb-[16px]">
          Breakout Session {locationId}
        </button>
        {console.log(locationSessions)}
        {locationSessions.length ? (
          locationSessions.map(({ speaker, time, title, color }) => {
            return (
              <div
                className={`py-[50px] px-6 flex  rounded-[24px] mb-4  ${color} xl:mx-0  min-[768px]:flex`}
                key={speaker}
              >
                <div>
                  <p className="text-[14px] leading-[21px] tracking-[0.14px] mb-8">
                    {time}
                  </p>
                  <p className="text-2xl font-bold leading-9 tracking-[0.24px] lg:text-[24px] mb-4">
                    {title}
                  </p>
                  <p className="text-base leading-6 tracking-[0.16px] mt-[8px]">
                    {speaker}
                  </p>

                  <div className="flex items-center mt-5 checkbox-wrapper">
                    <label
                      className="text-[18px] font-bold leading-[21.83px] flex items-center"
                      htmlFor={`select-${title}`}
                    >
                      <input
                        className="h-[0] w-[0] border-none rounded-lg"
                        type="checkbox"
                        id={`select-${title}`}
                      />
                      <div className="h-[40px] relative w-[40px] mr-2 rounded-lg bg-transparent border-2 border-white">
                        <img className="checkmark" src={checkmark} alt="" />
                      </div>
                      <span>Select this session</span>
                    </label>
                  </div>
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
