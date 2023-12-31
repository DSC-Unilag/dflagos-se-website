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
import { motion, useScroll } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  const isMobile = window.innerWidth <= 768;
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({ threshold: 0.8 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 100,
        transition: { ease: "easeOut", duration: 2 },
        rotate: [0, 0, 270, 270, 0],
      });
    }
  }, [inView]);
  return (
    <motion.div
      className={`animation-container ${isMobile ? "disable-animation" : ""}`}
    >
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="bg-[#fff] w-full overflow-hidden">
        <div
          className={`${Style.paddingX} ${Style.flexCenter} sm:px-[20px] lg:px-[100px]`}
        >
          <div className={`${Style.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className={`bg-[#fff] border-b border-t border-[#4285F4]`}>
        <div className={`${Style.boxWidth} mx-auto`}>
          <Hero />
        </div>
      </div>

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

      <div
        className={`${Style.paddingX} ${Style.flexStart} bg-[#0D0D0D]`}
        initial={!isMobile && { opacity: 0 }}
        ref={ref}
        animate={controls}
        transition={{ duration: 1 }}
      >
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
      <Involved />
      <GetBanner />
      <Faq />
      <Footer />
    </motion.div>
  );
};
export default HomePage;
