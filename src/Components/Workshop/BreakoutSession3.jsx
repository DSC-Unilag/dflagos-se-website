import React from 'react'
import { breakoutSessionData } from '../../constants'
import { ArrowRight2 } from '../../assets'

const BreakoutSession = () => {
  return (
    <div>
        
        <div className='p-[10px] py-[30px] border-[2px] border-dashed border-[#0D0D0D] mt-[24px] mb-[40px] rounded-[16px]'>

        <button className='bg-[#F9AB00] py-[8px] px-[16px] rounded-[8px] text-[#000] mb-[16px]'>BreakoutSession 3</button>
          {breakoutSessionData.map((item, index) => (
            <div key={index} className={`session flex flex-col p-[15px] md:p-[30px] rounded-[16px] ${index == 2 ? "mb-[0]" : "mb-[16px]"} ${index == 0 && "bg-[#EA4335]"} ${index == 1 && "bg-[#34A853]"} ${index == 2 && "bg-[#4285F4]"}   sxl:py-[56px] sxl:px-[24px]`}>
                <div className='text-[#fff]'>
                <p className=''>{item.time}</p>
                <p className='mt-[24px] mb-[16px]'>{item.title}</p>
                <p>{item.speaker} </p>
                </div>
                <div className='mt-[40px] flex items-center sm:justify-between bg-[#FFFAEB] rounded-[64px] py-[10px] px-[5px] sm:px-[17px] sm:py-[17px] mb-[30px]' >
                  <input className='px-[10px] py-[10px] rounded-[10px] w-[50%]  md:h-10 outline-none text-[8px] sm:text-[16px]' placeholder='Enter your ticket number E.g DSCA231907690'/>
                  <button className='flex flex-row text-[#000] border border-[#000] justify-center items-center gap-[8px] rounded-[48px] pl-[8px] py-[7px] md:py-[17px] md:px-[30px] bg-[#FFFAEB] lg:max-w-[250px] mb-0'>
                     <p className='text-[10px] lg:text-[18px] whitespace-nowrap'>Rsvp For A Session</p>
                    <img
                      src={ArrowRight2}
                      alt='arrow'
                    />
                   </button>
                </div>
              </div>
          ))}
        </div>
    </div>
  )
}

export default BreakoutSession
