import React from "react";
import { ArrowRight2, EventImage } from "../assets";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Tickets = () => {
  const [ref, inView] = useInView({threshold: 0.9})
  const controls = useAnimation()
  const isMobile = window.innerWidth <= 768;
  React.useEffect(() => {
    if(inView && !isMobile){
       controls.start({y: 0, opacity:100})
    }
  },[inView])
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/workshops");
  };
  return (
    <div className="pt-[64px]">
      <div className="flex flex-col pb-12 lg:flex-row gap-[21.5px] lg:gap-[21.5px]">
        <motion.div 
        className="flex flex-col text-[#fff] lg:pb-[164px]"
        ref={ref}
        initial={!isMobile && {y: -100, opacity:0}}
        animate={controls}
        transition={{duration: 0.9}}
        >
          <p className="text-[44px] lg:text-[64px] font-bold mb-6">
            Guess What? <br />
            It's FREE
          </p>

          <p className="max-w-[493px] text-[24px] font-bold mb-5">
            Get FREE tickets to connect, explore a world of ever evolving
            digital experiences.
          </p>

          <a
            href="https://dscunilag.dev/df_lagos"
            className="flex flex-row mt-[40px] text-[#000] border border-[#000] sm:mb-[50px] md:mb-0 justify-center items-center gap-[8px] rounded-[48px] py-[12px] px-[30px] bg-[#FFFAEB] hover:bg-[#dcd1b2] max-w-[293px]"
          >
            <p className=" font-bold">Grab A Free Ticket</p>
            <img src={ArrowRight2} alt="arrow" />
          </a>
        </motion.div>

        <motion.div className=""
          ref={ref}
          initial={!isMobile && {y: 100, opacity: 0}}
          animate={controls}
          transition={{duration: 0.9}}
        >
          <img src={EventImage} alt="event" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tickets;
