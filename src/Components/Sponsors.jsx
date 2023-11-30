import React from 'react'
import styles from "../style"
import { Github, Microsoft, Google, AltSchool, Paystack, ArrowRight2, Mtn} from '../assets'
import newwave from '../assets/newwave.webp';
import requestMechanic from '../assets/Request_mechanic.jpeg';
import myTherapist from '../assets/Mytherapist.ng_logo_dark.png';

const Clients = () => {
  return (
   <section id='clients' className={`text-white my-[20px] sm:my-[30px] lg:mt-[55px] bg-[#fff]`}>
    <div className='w-full grid grid-col-1 sm:grid-cols-3 lg:grid-cols-4 gap-[40px] sm:gap-[20px] place-content-center place-items-center py-[40px] xs:py-0'>

     <div>
        <a href="https://google.com" target="_blank">
          <img src={Google} alt='Google'/>
        </a>
      </div>

      <div>
        <a href="https://newwave.io" target="_blank">
          <img src={newwave} alt='Google'/>
        </a>
      </div>

      <div>
        <a href="www.mytherapist.ng" target="_blank">
          <img src={myTherapist} alt='Google'/>
        </a>
      </div>

      <div>
        <a href="" target="_blank">
          <img src={requestMechanic} alt='Google'/>
        </a>
      </div>
    </div>
     
   </section>
  )
}

export default Clients