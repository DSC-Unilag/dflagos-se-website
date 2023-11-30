import React from 'react'
import { ArrowRight2 } from '../assets'
import { Link } from 'react-router-dom'
import { stats } from '../constants'
import '../styles/event.css'

const EventSchedule = () => {
  return (
    <section className='mt-[40px] sm:mt-[80px]'>
   
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-[15px] xs:gap-0 md:gap-0 sxl:gap-[3em] xl:gap-0 place-items-center md:place-content-start'>
          <div className='flex flex-col lg:pt-[28.5px] w-fit'>
            <div>
            <p className='lg:mb-[25px]'>9.00AM - 12.00AM</p>
             <p className='lg:text-[50px] leading-none font-extrabold'>Event <br/> Schedule</p>
             <p className='mt-[8px]'>Gotten Your ticket ?</p> 
            </div>
            
         <Link to={"/workshops"}>
         <button className='flex  flex-row mt-[8px] text-[#000] border-[2px] border-[#000] justify-center items-center gap-[8px] rounded-[48px] py-[17px] px-[30px] bg-[#FFFAEB] max-w-[250px] mb-[35.5px] sm:mb-12'>
          <p className='font font-extrabold whitespace-nowrap'>Rsvp For A Session</p>
          <img
          src={ArrowRight2}
          alt='arrow'
          />
         </button>
         </Link>   
           
          </div>
   
       {stats.map((item) => {
        const {speaker, time, title, color} = item
        return (
          <div className={`py-[50px] px-[24px] rounded-[48px] w-[298px] h-full text-[#fff]  ${color}  xl:mx-0`}>
            <div className=''>
                <p className='mb-[15px]'>{time}</p>
                <p className='lg:text-[18px] leading-none session-cards'>{title}</p>
                <p className='mt-[8px] whitespace-normal'>{speaker}</p> 
            </div>
          </div>
        )
       })}
      
        </div>
    </section >
  )
}

export default EventSchedule