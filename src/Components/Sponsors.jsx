import React from 'react'
import {clients} from "../constants"
import styles from "../style"
import { Github, Microsoft, Google, AltSchool, Paystack, ArrowRight2, Mtn} from '../assets'

const Clients = () => {
  return (
   <section id='clients' className={`text-white ${styles.flexCenter} lg:mt-[55px]`}>
    <div className='flex flex-wrap lg:flex-nowrap gap-[80px]'>

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