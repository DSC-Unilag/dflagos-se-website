import React from 'react'
import { Logic } from '../../assets'
import { DownArrow } from '../../assets'
const Hero = () => {
  return (
    <div>
    <div className='flex md:flex-row justify-between'>
        <p className='md:text-[64px]'>
            Schedule, Workshops and more...
        </p>

     <img src={Logic} alt='logic' />
    </div>

  <div className='flex md:flex-row justify-between sxl:mt-[62px]'>
    <p className='sxl:max-w-[742px]'>
      You could be a novice or a professional, our workshop sessions are tailored to your skill level.<br/> 
      RSVP for a breakout session by puting in your  ticket number.
    </p>

    <button className='flex flex-row gap-[8px] items-center'>
     <p className='white whitespace-nowrap'>Rsvp For A Session</p>
    <img src={DownArrow} alt='downarrow'/>
    </button>
  </div>
    </div>
  )
}



export default Hero