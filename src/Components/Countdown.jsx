import React, { useState, useEffect } from "react";
import ArrowRight from "../assets/ArrowRight.svg";
import { useNavigate } from "react-router-dom";

import cupDoodle from "./../assets/cup-doodle.svg";
import connectDoodle from "./../assets/connect-doodle.svg";
import kiteDoodle from "./../assets/kite-doodle.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Countdown = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  const isMobile = window.innerWidth <= 768;
  React.useEffect(() => {
    if (inView && !isMobile) {
      controls.start({ x: 0, opacity: 100, scale: 1 });
    }
  }, [inView]);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/workshops");
  };

  const targetDate = new Date("2023-12-09T08:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  /* eslint-disable-next-line */
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [targetDate]);

  return (
    <div className="countdown relative py-40">
      <div className="container max-w-[1280px] mx-auto">
        <img
          src={connectDoodle}
          alt=""
          className="absolute left-[80px] top-[130px] hidden min-[1280px]:block"
        />
        <img
          src={cupDoodle}
          alt=""
          className="absolute right-[200px] bottom-[0] hidden min-[1280px]:block"
        />
        <img
          src={kiteDoodle}
          alt=""
          className="absolute right-[60px] top-[100px] hidden min-[1280px]:block"
        />
        <motion.h1
          ref={ref}
          initial={!isMobile && { opacity: 100, scale: 0.5 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="text-[56px] font-bold"
        >
          Are you ready?
        </motion.h1>
        <div className="row">
          <div className="text-center">
            <div className="time mb-2">
              <p>{timeLeft.days}</p>
            </div>
            <span className="text-[#0d0d0d] text-[24px] leading-[30.5px] tracking-[0.5px]">
              Days
            </span>
          </div>
          <div className="text-center">
            <div className="time mb-2">
              <p>{timeLeft.hours}</p>
            </div>
            <span className="text-[#0d0d0d] text-[24px] leading-[30.5px] tracking-[0.5px]">
              Hours
            </span>
          </div>
          <div className="text-center">
            <div className="time mb-2">
              <p>{timeLeft.minutes}</p>
            </div>
            <span className="text-[#0d0d0d] text-[24px] leading-[30.5px] tracking-[0.5px]">
              Minutes
            </span>
          </div>
          <div className="text-center">
            <div className="time mb-2">
              <p>{timeLeft.seconds}</p>
            </div>
            <span className="text-[#0d0d0d] text-[24px] leading-[30.5px] tracking-[0.5px]">
              Seconds
            </span>
          </div>
        </div>
        <a
          href="https://gdsc.community.dev/events/details/developer-student-clubs-university-of-lagos-presents-devfest-lagos-student-edition/"
          onClick={handleNavigate}
          className="hover:bg-blue-600"
        >
          <p>Grab A Free Ticket</p>
          <img src={ArrowRight} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Countdown;
