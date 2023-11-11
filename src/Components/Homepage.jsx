import React from 'react'
import  {Navbar, Hero, Sponsors, Tickets, Edition, About, EventSchedule, Footer} from "./Index"
import styles from '../style'

const HomePage = () => {
  return (
    <div>
    <div className="bg-[#fff] font-sans w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
    </div>

<hr className="text-[#4285F4] border border-[#4285F4]"/>

    <div className={`font-sans bg-[#fff]`}>
      <div className={`${styles.boxWidth}`}>
          <Hero/>
      </div>
    </div>

  <hr className="text-[#4285F4] border-[1px] border-[#000000]"/>

    <div className={`${styles.paddingX}text-white font-sans lg:pb-[53px]`}>
      <div className={`${styles.boxWidth}`}>
        <Sponsors/>
      </div>
    </div> 
    
    <div className={`${styles.paddingX} ${styles.flexStart} font-sans text-white ticket-background`}>
      <div className={`${styles.boxWidth}`}>
       <Tickets/>
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart} font-sans bg-[#0D0D0D]`}>
     <div className={`${styles.boxWidth}`}>
       <Edition/>
     </div>
    </div>

    <div className={`flex px-6 lg:px-0 sm:pl-[124px] lg:pl-0 lg:justify-end font-sans bg-[#fff] mb-[120px]`}>
     <div className={`${styles.boxWidth}`}>
       <About/>
     </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter} font-sans bg-[#fff] mb-[120px]`}>
     <div className={`${styles.boxWidth}`}>
     <EventSchedule/>
     </div>
    </div>
     
    </div>
  )
}
export default HomePage