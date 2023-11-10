import React from 'react'
import styles from "../style"
import GetStarted from './GetStarted'
import { ArrowRight, ArrowRight2 } from '../assets'

const Hero = () => {
  return (
    <section id='home'>
       <div className='flex flex-row pl-[145px] pr-[123px] justify-between'>

        <div>
         <p className=' mt-[0px] text-[94px] max-w-[667px] text-[#000] tracking-tighter font-sans italic' style={{fontWeight: 400}}>
         DevFest Student <br/> Edition Lagos 
        </p>
        </div>
        

        <div>
        <svg width="2" height="332" viewBox="0 0 2 332" fill="none" xmlns="http://www.w3.org/2000/svg">
         <line x1="1.15" y1="332" x2="1.15001" y2="-1.5299e-08" stroke="#4285F4" stroke-width="0.7"/>
        </svg>
        </div>

        <div className='flex flex-col '>
         <p className='lg:max-w-[470px] mt-[45px] text-[#000]'>
         Ultimate one-day event with speakers across Artificial Intelligence, Product, Mobile, Cloud, Intellectual Property and Startup Funding, Policy & Governance, and so much more!
         </p>

         <button className='flex flex-row mt-[40px] justify-center items-center gap-[8px] rounded-[48px] py-[17px] px-[30px] bg-[#4285F4] max-w-[293px]'>
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