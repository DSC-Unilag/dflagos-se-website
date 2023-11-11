import React from 'react'
import styles from "../style"
import GetStarted from './GetStarted'
import { ArrowRight, ArrowRight2 } from '../assets'

const Hero = () => {
  return (
    <section id='home'>
       <div className='flex flex-col lg:flex-row pl-[25px] pr-[20px] sm:pl-[145px] sm:pr-[123px] justify-between mb-[20px] sm:mb-[40px] lg:mb-0'>

        <div>
         <p className=' mt-[40px] lg:pb-[123px] text-[42px] xs:text-[50px] sm:text-[61px] lg:text-[94px] leading-none max-w-full lg:max-w-[667px] text-[#000] tracking-tighter font-sans italic' style={{fontWeight: 400}}>
         DevFest Student <br className='hidden xs:block'/> Edition Lagos 
        </p>
        </div>
        

        <div className='hidden lg:flex'>
        <div className='hidden sm:block border-l-2 border-[#4285F4] '/>
        </div>

        <div className='flex flex-col lg:pl-[20px]'>
         <p className='lg:max-w-[470px] mt-[45px] text-[#000] font-sans italic'>
         Ultimate one-day event with speakers across Artificial Intelligence, Product, Mobile, Cloud, Intellectual Property and Startup Funding, Policy & Governance, and so much more!
         </p>

         <button className='flex flex-row mt-[40px] sm:mb-[45px] md:mb-0 justify-center items-center gap-[8px] rounded-[48px] py-[17px] px-[30px] bg-[#4285F4] max-w-[293px]'>
          <p>Grab a Free Ticket</p>
          <img
          src={ArrowRight}
          alt='arrow'
          />
         </button>
        </div>

      </div>      
    </section>
  )
}

export default Hero