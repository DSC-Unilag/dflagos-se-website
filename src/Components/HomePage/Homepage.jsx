import React from "react";
import {
  Navbar,
  Hero,
  Sponsors,
  Tickets,
  EventSchedule,
  Edition,
  About,
} from "../Index";
import Style from "../../style";
import Speakers from "../Speakers";
import Countdown from "../Countdown";
import Involved from "../Involved";
import GetBanner from "../GetBanner";
import Faq from "../Faq";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#fff] font-sans w-full overflow-hidden">
        <div className={`${Style.paddingX} ${Style.flexCenter}`}>
          <div className={`${Style.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <hr className="text-[#4285F4] border border-[#4285F4]" />

      <div className={`bg-[#fff]`}>
        <div className={`${Style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <hr className="text-[#4285F4] border-[1px] border-[#000000]" />

      <div
        className={`${Style.paddingX} ${Style.flexStart} text-white bg-[#fff] lg:pb-[53px]`}
      >
        <div className={`${Style.boxWidth}`}>
          <Sponsors />
        </div>
      </div>

      <div
        className={`${Style.paddingX} ${Style.flexStart} text-white ticket-background`}
      >
        <div className={`${Style.boxWidth}`}>
          <Tickets />
        </div>
      </div>

      <div className={`${Style.paddingX} ${Style.flexStart} bg-[#0D0D0D]`}>
        <div className={`${Style.boxWidth}`}>
          <Edition />
        </div>
      </div>

      <div className={`px-6 md:px-0 md:pl-[124px]`}>
        <div className={``}>
          <About />
        </div>
      </div>

      <div className={` ${Style.flexStart}`}>
        <div className={`${Style.boxWidth}`}>
          <EventSchedule />
        </div>
      </div>

      <Speakers />
      <Countdown />
      {/* <Involved /> */}
      <GetBanner />
      <Faq />
      <Footer />
    </>
  );
};
export default HomePage;
