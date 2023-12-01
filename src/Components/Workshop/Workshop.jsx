import React from "react";
import Style from "../../style";
import Footer from "../Footer";
import { Navbar } from "../Index";
import { ScheduleHero, Tab } from "./index";
import Breaksession from "./BreakIndex";

const Workshop = () => {
  return (
    <div className="bg-[#f5f9fe]">
      <div className="w-full overflow-hidden">
        <div className={`px-6 ${Style.flexCenter}`}>
          <div className={`${Style.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className={`px-6 ${Style.flexCenter}`}>
          <div className={`${Style.boxWidth}`}>
            <ScheduleHero />
            <Tab />
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className={`px-6 ${Style.flexCenter}`}>
          <div className={`${Style.boxWidth}`}>
            <Breaksession />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Workshop;
