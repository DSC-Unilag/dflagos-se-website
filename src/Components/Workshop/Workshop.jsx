import React from "react";
import Style from "../../style";
import Footer from "../Footer";
import { Navbar } from "../Index";
import { ScheduleHero, Tab } from "./index";
import BreakoutSessions from "./BreakoutSessions";

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
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className={`px-6 ${Style.flexCenter}`}>
          <div className={`${Style.boxWidth}`}>
            <BreakoutSessions />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Workshop;
