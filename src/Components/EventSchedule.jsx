import React from 'react'
import { ArrowRight2 } from '../assets'

const EventSchedule = () => {
  return (
    <section className='mt-[40px] sm:mt-[80px]'>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4  md:gap-0 sxl:gap-[3em] xl:gap-0 place-items-center md:place-content-start'>
          <div className='flex flex-col lg:pt-[28.5px] w-fit'>
            <div>
            <p className='lg:mb-[32px]'>9.00AM - 12.00AM</p>
             <p className='lg:text-[40px] leading-none font-bold'>Event <br/> Schedule</p>
             <p className='mt-[8px]'>Gotten Your ticket ?</p> 
            </div>
            
           <button className='flex  flex-row mt-[8px] text-[#000] border-[2px] border-[#000] justify-center items-center gap-[8px] rounded-[48px] py-[17px] px-[30px] bg-[#FFFAEB] max-w-[250px] mb-[35.5px] sm:mb-0'>
          <p className='font font-extrabold whitespace-nowrap'>Rsvp For A Session</p>
          <img
          src={ArrowRight2}
          alt='arrow'
          />
         </button>
          </div>

          <div className='py-[64px] px-[24px] rounded-[24px] w-[298px] h-[295px] bg-[#EA4335] xl:mx-0'>
          <div className='text-[#fff]'>
            <p className='mb-[32px]'>9.00AM - 12.00AM</p>
             <p className='lg:text-[24px] leading-none'>The Curious case of <br/> user Interface</p>
             <p className='mt-[8px] whitespace-normal'>Temilola Peter - Product Designer, Google.</p> 
            </div>
          </div>

          <div className='py-[64px] px-[24px] rounded-[24px] w-[298px] h-[295px] bg-[#34A853] sm:mr-[2em] md:mr-0 xl:mr-0'>
          <div className='text-[#fff]'>
            <p className='mb-[32px]'>9.00AM - 12.00AM</p>
             <p className='lg:text-[24px] leading-none'>The Curious case of <br/> user Interface</p>
             <p className='mt-[8px]'>Temilola Peter - Product Designer, Google.</p> 
            </div>
          </div>

          <div className='py-[64px] px-[24px] rounded-[24px] w-[298px] h-[295px]  bg-[#4285F4]'>
          <div className='text-[#fff]'>
            <p className='mb-[32px]'>9.00AM - 12.00AM</p>
             <p className='lg:text-[24px] leading-none'>The Curious case of <br/> user Interface</p>
             <p className='mt-[8px] wh\'>Temilola Peter - Product Designer, Google.</p> 
            </div>
          </div>

          <div className='py-[64px] px-[24px] rounded-[24px] w-[298px] h-[295px] sm:mr-[2em] md:mr-0 bg-[#FDE293]'>
          <div className='text-[#fff]'>
            <p className='mb-[32px]'>9.00AM - 12.00AM</p>
             <p className='lg:text-[24px] leading-none'>The Curious case of <br/> user Interface</p>
             <p className='mt-[16px]'>Temilola Peter - Product Designer, Google.</p> 
            </div>
          </div>

          <div className='py-[64px] px-[24px] rounded-[24px] w-[298px] h-[295px] bg-[#4285F4] xl:mr-0'>
          <div className='text-[#fff]'>
            <p className='mb-[32px]'>9.00AM - 12.00AM</p>
             <p className='lg:text-[24px] leading-none'>The Curious case of <br/> user Interface</p>
             <p className='mt-[16px]'>Temilola Peter - Product Designer, Google.</p> 
            </div>
          </div>

          <div className='py-[64px] px-[24px] rounded-[24px] w-[298px] h-[295px] sm:mr-[2em] md:mr-0  xl:mr-0  bg-[#000]'>
          <div className='text-[#fff]'>
            <p className='mb-[32px]'>9.00AM - 12.00AM</p>
             <p className='lg:text-[24px] leading-none'>The Curious case of <br/> user Interface</p>
             <p className='mt-[16px]'>Temilola Peter - Product Designer, Google.</p> 
            </div>
          </div>

          <div className='py-[64px] px-[24px] rounded-[24px] w-[298px] h-[295px] bg-[#F9AB00]  xl:mr-0'>
          <div className='text-[#fff]'>
            <p className='mb-[32px]'>9.00AM - 12.00AM</p>
             <p className='lg:text-[24px] leading-none'>The Curious case of <br/> user Interface</p>
             <p className='mt-[16px]'>Temilola Peter - Product Designer, Google.</p> 
            </div>
          </div>

        </div>
    </section >
  )
}

export default EventSchedule