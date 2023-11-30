import React from "react";
import { ArrowRight2 } from "../assets";
import { Link } from "react-router-dom";
import { stats } from "../constants";
import { ScheduleStack } from "./ScheduleStack";

const EventSchedule = () => {
  return (
    <section className="mt-[40px] sm:mt-[80px]">
      <div className="sm:grid sm:grid-cols-2 sm:max-w-[600px] md:max-w-[900px] min-[1280px]:grid-cols-4 min-[1280px]:max-w-[1200px] sm:mx-auto md:grid-cols-3 place-items-center md:place-content-start">
        <div className="flex flex-col mx-auto mb-4 lg:pt-[28.5px] w-fit">
          <div>
            <p className="mb-6 lg:mb-[25px] opacity-0">9.00AM - 12.00AM</p>
            <p className="mb-2 text-[40px] lg:text-[50px] leading-none font-bold">
              Event <br /> Schedule
            </p>
            <p className="text-[18px] leading-[27px] mt-[8px]">
              Gotten your ticket?
            </p>
          </div>

          <Link to={"/workshops"}>
            <button className="flex  flex-row mt-[8px] text-[#000] border-[2px] border-[#000] justify-center items-center gap-[8px] rounded-[48px] py-[12px] px-[30px] bg-[#FFFAEB] max-w-[250px] mb-[35.5px] sm:mb-0">
              <p className="font text-[16px] font-bold leading-[19.4px] whitespace-nowrap">
                RSVP For A Session
              </p>
              <img src={ArrowRight2} alt="arrow" />
            </button>
          </Link>
        </div>
        {stats.map((item) => {
          const { speaker, time, title, color } = item;
          return (
            <div
              className={`py-[50px] px-[24px] flex justify-center items-center rounded-[24px] w-[300px] h-[440px] text-[#fff]  ${color} xl:mx-0 hidden min-[768px]:flex`}
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
        })}
        <ScheduleStack />
      </div>
    </section>
  );
};

export default EventSchedule;
