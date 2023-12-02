import React from "react";
import styles from "../style";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [ref, inView] = useInView({threshold: 0.8})
  const controls = useAnimation()

  React.useEffect(() => {
    if(inView){
       controls.start({y: 0, opacity:100, transition: {ease: "easeOut", duration: 2}})
    }
  },[inView])

  return (
    <motion.section
      id="schedule"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col 
  relative py-[70px] md:py-[100px] lg:py-[200px] text-[#fff]`}
  ref={ref}
  initial={{opacity: 0}}
  animate={controls}
  transition={{duration: 1}}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p style={{fontWeight: 700}} className="min-[350px]:text-[28px] font-extrabold min-[460px]:text-[35px] whitespace-nowrap xs:whitespace-normal min-[640px]:text-[40px] lg:text-[80px] leading-[-30px] xs:leading-[-10px] tracking-tighter text-[#fff] shadow-text  mb-4">
            We are setting the standard <br /> for DevFest Student Edition!
          </p>

          <div className="flex text-[#FFFAEB] flex-col min-[640px]:flex-row min-[640px]:justify-between text-[16px] lg:text-[24px] py-[40px] xs:py-0">
            <p className="font-bold">When: 9th December⌚</p>
            <p className="font-bold">Where: Multipurpose hall, UNILAG📍</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
