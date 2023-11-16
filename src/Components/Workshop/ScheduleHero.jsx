import React from 'react'
import { Logic } from '../../assets'
import { DownArrow } from '../../assets'
const Hero = () => {
  return (
    <div className="">
        <div className='flex flex-col md:flex-row justify-between'>
            <p className='text-[20px] md:text-[40px]'>
                Schedule, Workshops and more...
            </p>

         <img className='w-[50%] md:w-auto' src={Logic} alt='logic' />
        </div>

      <div className='mt-[20px] flex flex-col md:flex-row lg:justify-between items-start md:items-center'>
        <p className='sxl:max-w-[742px]'>
          You could be a novice or a professional, our workshop sessions are tailored to your skill level.<br className='hidden md:block'/>
          RSVP for a breakout session by putting in your  ticket number.
        </p>

        <button className='flex justify-between mt-[30px] gap-[8px]'>
            <p className=''>Rsvp For A Session</p>
            <img className='' src={DownArrow} alt='downarrow'/>
        </button>
      </div>
    </div>
  )
}



export default Hero