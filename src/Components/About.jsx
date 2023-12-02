import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const About = () => {

  const [ref, inView] = useInView({threshold: 0.8})
  const controls = useAnimation()

  React.useEffect(() => {
    if(inView){
       controls.start({x: 0, opacity:100})
    }
  },[inView])
  
  return (
    <section id="about" className="pt-[40px] lg:pt-[92px]">
      <div className="flex flex-col w-full lg:h-[50vh]">
        <motion.h1 
          ref={ref}
          initial={{x: -100, opacity:0}}
          animate={controls}
          transition={{duration: 1}}
        className="lg:max-w-[253px] text-[54px] lg:text-[94px] leading-none font-bold tracking-[-1.5px]">
          About <br />
          Event
        </motion.h1>

        <div className="w-full flex mt-[24px] lg:pl-[305px]">
          <motion.div 
           ref={ref}
           initial={{x: 100, opacity:0}}
           animate={controls}
           transition={{duration: 1}}
          className="border-y-2 border-[#4285F4] w-[100%]">
            <div className="flex flex-col sm:flex-row">
              <p className="lg:max-w-[402px] pr-[14px] py-[19px] text-[20px] tracking-[-1.5px]">
          DevFest Lagos Student Edition 2023 marks the inaugural event tailored specifically for students, aiming to bridge the gap between technology and the student community.
              </p>
              <div className="hidden sm:block border-l-2 border-[#4285F4] " />

              <p className="lg:max-w-[434px] py-[19px] sm:pl-[37px] text-[20px] tracking-[-1.5px]">
              Explore developer tools, learn from experts, and connect with other developers from your local community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
