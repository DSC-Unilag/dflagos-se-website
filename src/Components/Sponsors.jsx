import React from 'react'
import styles from "../style"
import { Google} from '../assets'
import newwave from '../assets/newwave.webp';
import requestMechanic from '../assets/Request_mechanic.jpeg';
import myTherapist from '../assets/Mytherapist.ng_logo_dark.png';
import Marquee from "react-fast-marquee";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Clients = () => {
  const [ref, inView] = useInView({threshold: 0.8})
  const controls = useAnimation()

  React.useEffect(() => {
    if(inView){
       controls.start({rotate: 0})
    }
  },[inView])
  return (
   <section id='clients' className={`text-white my-[20px] sm:my-[30px] lg:mt-[55px] bg-[#fff]`}>
    <div className='w-full grid grid-col-1 sm:grid-cols-3 lg:grid-cols-4 gap-[40px] sm:gap-[20px] place-content-center place-items-center py-[40px] xs:py-0'>


     <motion.div
     ref={ref}
     initial={{rotate: 50}}
     animate={controls}
     transition={{duration: 1}}
     >
        <a href="https://google.com" target="_blank">
          <img src={Google} alt='Google'/>
        </a>
      </motion.div>

      <motion.div
      ref={ref}
      initial={{rotate: -60}}
      animate={controls}
      transition={{duration: 1}}
      >
        <a href="https://newwave.io" target="_blank">
          <img src={newwave} alt='Google'/>
        </a>
      </motion.div>

      <motion.div
      ref={ref}
      initial={{rotate: 50}}
      animate={controls}
      transition={{duration: 2}}>
        <a href="https://www.mytherapist.ng" target="_blank">
          <img src={myTherapist} alt='Google'/>
        </a>
      </motion.div>

      <motion.div
      ref={ref}
      initial={{rotate: -90}}
      animate={controls}
      transition={{duration: 2}}>
        <a href="https://requestmechanic.com" target="_blank">
          <img src={requestMechanic} alt='Google'/>
        </a>
      </motion.div>
    </div>
     
   </section>
  )
}

export default Clients