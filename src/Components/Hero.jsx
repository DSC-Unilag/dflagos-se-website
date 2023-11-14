import React from 'react'
import styles from "../style"
import GetStarted from './GetStarted'
import { ArrowRight, ArrowRight2 } from '../assets'
import {useNavigate} from "react-router-dom"

const Hero = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/workshops")
  }
  return (
    <section id='home'>
       <div className='flex flex-col lg:flex-row pl-[25px] pr-[20px] sm:pl-[124px] justify-between mb-[40px] sm:mb-[40px] lg:mb-0'>

        <div className='xl:pr-[70px]'>
         <p className=' mt-[40px] lg:pb-[123px] text-[42px] xs:text-[50px] sm:text-[71px] xl:text-[94px] leading-none max-w-full lg:max-w-[667px] xl:whitespace-nowrap text-[#000] tracking-tighter font-sans italic' style={{fontWeight: 400}}>
         DevFest Student <br className='hidden xs:block'/> Edition Lagos 
        </p>
        </div>
        

        <div className='hidden lg:flex'>
        <div className='hidden sm:block border-l-2 border-[#4285F4] '/>
        </div>

        <div className='flex flex-col lg:pl-[67px]'>
         <p className='md:max-w-[470px] lg:max-w-[470px] mt-[45px] text-[#000] font-sans italic'>
         Ultimate one-day event with speakers across Artificial Intelligence, Product, Mobile, Cloud, Intellectual Property and Startup Funding, Policy & Governance, and so much more!
         </p>

         <button onClick={handleNavigate} className='flex flex-row mt-[40px] sm:mb-[50px] md:mb-0 justify-center items-center gap-[8px] rounded-[48px] py-[17px] px-[30px] bg-[#4285F4] hover:bg-blue-600 max-w-[293px]'>
          <p className="text-[#fff]">Grab a Free Ticket</p>
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