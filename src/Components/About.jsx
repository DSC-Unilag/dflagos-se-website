import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';


const About = () => {
  const controls = useAnimation()
    // Function to handle animations based on visibility
    const handleVisibility = async (isVisible) => {
      if (isVisible) {
        await controls.start({ opacity: 1, y: 0 });
      } else {
        await controls.start({ opacity: 0, y: 50 });
      }
    };

    const isVisible = window.scrollY > window.innerHeight * 0.75;

    console.log(isVisible)

    useEffect(() => {
      const handleScroll = () => {
        // Check if the component is in the viewport
        const isVisible = window.scrollY < window.innerHeight * 0.75;
        handleVisibility(isVisible);
      };
  
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Initial animation check
      handleVisibility(true);
  
      // Remove the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
   
    },[])
  
  return (
    <section id='about' className='pt-[40px] lg:pt-[92px]'>

     <div className='flex flex-col w-full lg:h-[50vh]'>
       <h1 className='lg:max-w-[253px] text-[40px] lg:text-[94px] leading-none tracking-normal' style={{fontWeight: 700}}>About <br/>Event</h1>
     
     <div className='w-full flex mt-[24px] lg:pl-[305px]'>
        <div className='border-y-2 border-[#4285F4] w-[100%]'>
           <div className='flex flex-col sm:flex-row'>
             <motion.p 
             className='lg:max-w-[402px] pr-[14px] py-[19px]'
             initial={{ opacity: 0, y: -150 }}
             animate={controls}
             transition={{ duration: 0.5}}
             >
             DevFestStudent’s Edition 2023 - is the first edition held specially 
             for students with the aim of bringing technology closer to Students 
             and tech enthusiasts passionate about technology.
             </motion.p>
            <div className='hidden sm:block border-l-2 border-[#4285F4] '/>

              <motion.p 
              className='lg:max-w-[434px] py-[19px] sm:pl-[37px]'
              initial={{ opacity: 0, y: -150 }}
              animate={controls}
              transition={{ duration: 0.5}}
              >
              Held in over 20 countries around the world, this is not just an event but a PLATFORM 
              connecting Students with expert developers, and Tech enthusiasts 
              </motion.p>
           </div>
        </div>
     </div>

     </div>
    </section>
  )
}

export default About