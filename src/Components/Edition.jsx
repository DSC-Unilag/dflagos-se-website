import React from 'react'
import { feedback } from '../constants'
import styles from '../style'

const Testimonials = () => {
  return (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col 
  relative py-[70px] md:py-[100px] lg:py-[200px] text-[#fff]`}>
  <div className='flex flex-col'>
  <div className='flex flex-col'>
    <p className='text-[25px] sm:text-[40px] lg:text-[80px] leading-[-10px] tracking-tighter shadow-text' style={{fontWeight: 900}}>
       We are setting the standard <br/> for DevFest Student Edition!
    </p>

    <div className='flex flex-col sm:flex-row sm:justify-between text-[16px] lg:text-[24px]'>
      <p>
      When: 10th December⌚
      </p>

      <p>
      Where: Multipurpose hall, UNILAG📍 
      </p>
    </div>
 </div>   
    
  </div>
  </section>
  )
}

export default Testimonials