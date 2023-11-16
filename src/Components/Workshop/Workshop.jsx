import React from 'react'
import Style from "../../style"
import Footer from '../Footer';
import {Navbar} from "../Index"
import {ScheduleHero, Tab, BreakoutSession1, BreakoutSession2, BreakoutSession3} from "./index"

const Workshop = () => {
  return (
    <div className='bg-[#fff]'>

    <div className="bg-[#fff] font-sans w-full overflow-hidden">
    <div className={`${Style.paddingX} ${Style.flexCenter}`}>
      <div className={`${Style.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
    </div>

    <div className="bg-[#fff] font-sans w-full overflow-hidden">
    <div className={`${Style.paddingX} ${Style.flexCenter}`}>
      <div className={`${Style.boxWidth}`}>
        <ScheduleHero/>
        <Tab/>
      </div>
    </div>
    </div>

    <div className="bg-[#fff] font-sans w-full overflow-hidden">
    <div className={`${Style.paddingX} ${Style.flexCenter}`}>
      <div className={`${Style.boxWidth}`}>
         <BreakoutSession1/>
       <BreakoutSession2/>
        <BreakoutSession3/>
      </div>
    </div>
    </div>

    <Footer />
    </div>
  )
}



export default Workshop