import React from 'react'
import { useState } from 'react'
import { navLinks} from "../constants"
import {googleDevfest} from "../assets/index"
import {HiOutlineMenu} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom'
const Navbar = () => {
   const [toggle, setToggle] = useState(false)
  return (
     <nav className='w-full flex py-6 justify-between items-center navbar'>
        <Link className="w-[28%] lg:w-[12%]" to={"/"}> 
        <img src={googleDevfest} alt={"Hoobank image"}
         
        />
        </Link>
       
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-3
              ${index === navLinks.length - 1 ? 'mr-0': 'mr-[24px]'} text-black`}>
               <a href={`#${nav.id}`}>
                  {nav.title}
               </a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>
           <span className='text-[30px]' onClick={() => setToggle((prev) => !prev)}>{<HiOutlineMenu/>} </span>
          </div>
         <div className={`${toggle ? 'flex flex-row' : 
         "hidden"}  bg-[#fff] pt-[40px] w-[60%] px-[14px] shadow-xl absolute top-[20px] right-0 h-[100%] 
          sidebar`}>
               <ul className='list-none flex flex-col flex-1'>
          {navLinks.map((nav, index) => (
            <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-3
              ${index === navLinks.length - 1 ? 'mr-0': 'mb-4'} text-black`}>
               <a href={`#${nav.id}`}>
                  {nav.title}
               </a>
            </li>
          ))}
        </ul> 
         <span className='text-[30px]' onClick={() => setToggle(false)}><AiOutlineClose/></span>
         </div>
     </nav>
  )
}

export default Navbar