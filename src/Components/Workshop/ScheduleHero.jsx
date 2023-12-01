import React from "react";
import { Logic } from "../../assets";
import { DownArrow } from "../../assets";
const Hero = () => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-[40px] font-bold md:text-[64px] tracking-tighter z-10">
          Schedule, Workshops and more...
        </p>

        <img
          className="absolute -right-[45px] top-[40px] w-[200px] z-0 md:w-auto sm:-top-[10px] md:top-0 sxl:right-0"
          src={Logic}
          alt="logic"
        />
      </div>

      <div className="mt-[20px] flex flex-col md:flex-row lg:justify-between items-start md:items-center z-10 relative sm:flex-row">
        <p className="sxl:max-w-[990px] md:text-[20px]">
          You could be a novice or a professional, our workshop sessions are
          tailored to your skill level. Pick a session in each time frame and
          RSVP for your selected breakout sessions by putting in your ticket
          number.
        </p>

        <button className="flex justify-between items-center mt-[30px] gap-[8px] shrink-0 ml-8 md:mt-0">
          <p className="font-bold ">RSVP For A Session</p>
          <img className="arrow-anim" src={DownArrow} alt="downarrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
