import React from 'react'
import { useState } from 'react'
import { navLinks} from "../constants"
import {googleDevfest} from "../assets/index"
const Navbar = () => {
   const [toggle, setToggle] = useState(false)
  return (
     <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={googleDevfest} alt={"Hoobank image"}
         className="w-[120px] h-[86px]"
        />
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-3
              ${index === navLinks.length - 1 ? 'mr-0': 'mr-10'} text-black`}>
               <a href={`#${nav.id}`}>
                  {nav.title}
               </a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>
            {/* <img src={toggle ? close : menu} alt="toggleicon"
               className='w-[28px] h-[28px] object-contain' 
               onClick={() =>setToggle(prev => !prev)}
            /> */}
          </div>
         <div className={`${toggle ? 'flex' : 
         "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-[140px] rounded-xl
          sidebar`}>
               <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-3
              ${index === navLinks.length - 1 ? 'mr-0': 'mb-4'} text-white`}>
               <a href={`#${nav.id}`}>
                  {nav.title}
               </a>
            </li>
          ))}
        </ul> 
         </div>
     </nav>
  )
}

export default Navbar