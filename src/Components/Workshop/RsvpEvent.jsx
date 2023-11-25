import React from 'react'
import { ArrowRight2 } from '../../assets'


const RsvpEvent = ({ticketNumber, handleTicketNumber, handleRsvpEvent, errorState}) => {
console.log(errorState)
  return (
    <div className='mt-[80px] mb-[30px]'>
        <p className='text-[24px]'>RSVP for your selected breakout sessions by putting in your ticket number.</p>
        <div className='mt-[40px] flex items-center sm:justify-between bg-[#FFFAEB] rounded-[64px] py-[10px] px-[5px] sm:px-[17px] sm:py-[17px]' >
            
            <input onChange={handleTicketNumber} type='text' value={ticketNumber} name='ticketNumber' className='px-[10px] py-[10px] rounded-[10px] w-[50%]  md:h-10 outline-none text-[8px] sm:text-[16px]' placeholder='Enter your ticket number E.g DSCA231907690'/>
            <button type='submit' onSubmit={handleRsvpEvent} className='flex flex-row text-[#000] border border-[#000] justify-center items-center gap-[8px] rounded-[48px] pl-[8px] py-[7px] md:py-[17px] md:px-[30px] bg-[#FFFAEB] lg:max-w-[250px] mb-0'>
            <p className='text-[10px] lg:text-[18px] whitespace-nowrap'>Rsvp For A Session</p>
             <img
                      src={ArrowRight2}
                      alt='arrow'
                    />
            </button>
        </div>
        <p className='text-red-500 ml-[10px]'>{errorState}</p>
    </div>
  )
}

export default RsvpEvent