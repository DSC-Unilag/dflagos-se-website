import React from 'react'
import { ArrowRight2, EventImage } from '../assets'

const Tickets = () => {
  return (
    <div className='pt-[64px]'>
        <div className='flex flex-col lg:flex-row gap-[21.5px] lg:gap-[21.5px]'>
        <div className='flex flex-col text-[#fff] lg:pb-[164px]'>
           <p className='text-[30px] lg:text-[64px]' style={{fontWeight: 600}}>
           Guess What? <br/>
           Its FREE
           </p>

           <p className='max-w-[493px] text-[24px]' style={{fontWeight: 400}}>
           Get FREE tickets to connect, explore a world of ever evolving digital experiences.
           </p>

           <button className='flex flex-row mt-[40px] text-[#000] border border-[#000] justify-center items-center gap-[8px] rounded-[48px] py-[17px] px-[30px] bg-[#FFFAEB] hover:bg-[#dcd1b2] max-w-[293px]'>
          <p>Grab a Free Ticket</p>
          <img
          src={ArrowRight2}
          alt='arrow'
          />
         </button>
        </div>
          
       <div className=''>
         <img src={EventImage} alt="event"/>
       </div>

        </div>
    </div>
  )
}

export default Tickets