import React from 'react'
import {clients} from "../constants"
import styles from "../style"
import { Github, Microsoft, Google, AltSchool, Paystack, ArrowRight2, Mtn} from '../assets'

const Clients = () => {
  return (
   <section id='clients' className={`text-white my-[20px] sm:my-[30px] lg:mt-[55px]`}>
    <div className='w-full grid grid-col-1 sm:grid-cols-3 lg:grid-cols-6 gap-[40px] sm:gap-[20px] place-content-center place-items-center'>

     <div>
        <img src={Google} alt='Google'/>
      </div>

      <div>
        <img src={Microsoft} alt='Google'/>
      </div>

      <div>
        <img src={Paystack} alt='Google'/>
      </div>

      <div>
        <img src={Mtn} alt='Google'/>
      </div>

      <div>
        <img src={AltSchool} alt='Google'/>
      </div>

      <div>
        <img src={Github} alt='Google'/>
      </div>

    </div>
     
   </section>
  )
}

export default Clients