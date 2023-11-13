import React from 'react'
import { Logic } from '../../assets'
import { DownArrow } from '../../assets'
const Hero = () => {
  return (
    <div className="schedule-hero">
        <div className='flex md:flex-row justify-between'>
            <p className='text-[40px]'>
                Schedule, Workshops and more...
            </p>

         <img src={Logic} alt='logic' />
        </div>

      <div className='schedule-hero-rsvp mt-[20px]'>
        <p className='sxl:max-w-[742px]'>
          You could be a novice or a professional, our workshop sessions are tailored to your skill level.<br/>
          RSVP for a breakout session by putting in your  ticket number.
        </p>

        <button className='rsvp-button mt-[30px] gap-[8px]'>
            <p className='white'>Rsvp For A Session</p>
            <img src={DownArrow} alt='downarrow'/>
        </button>
      </div>
    </div>
  )
}



export default Hero