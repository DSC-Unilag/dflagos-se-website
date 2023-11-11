import React from 'react'
import { breakoutSessionData } from '../../constants'
import { ArrowRight2 } from '../../assets'

const BreakoutSession = () => {
  return (
    <div>
        
        <div className='border-[2px] border-dashed border-[#0D0D0D] mt-[24px] rounded-[16px] sxl:py-[48px] sxl:px-[24px]'>
        
        <button className='bg-[#F9AB00] py-[8px] px-[16px] rounded-[8px] text-[#000] mb-[16px]'>BreakoutSession 3 </button> 
          
          {breakoutSessionData.map((item, index) => (
            <>
            <div key={index} className={`flex flex-col rounded-[16px] ${index == 2 ? "mb-[0]" : "mb-[16px]"} ${index == 0 && "bg-[#F9AB00]"} ${index == 1 && "bg-[#EA4335]"} ${index == 2 && "bg-[#000]"}   sxl:py-[56px] sxl:px-[24px]`}>
                <div className='text-[#fff]'>
                <p className=''>{item.Time}</p>
                <p className='mt-[24px] mb-[16px]'>{item.title}</p>
                <p>{item.speaker} </p>
                </div>      
                <div className='mt-[40px] flex items-center justify-between bg-[#FFFAEB] rounded-[64px] px-[16px] py-[28px]' >
                  <input className='w-[35%] h-10 outline-none' placeholder='Enter your ticket number E.g DSCA231907690'/>
                  <button className='flex flex-row mt-[8px] text-[#000] border border-[#000] justify-center items-center gap-[8px] rounded-[48px] py-[17px] px-[30px] bg-[#FFFAEB] max-w-[250px] mb-[35.5px] sm:mb-0'>
                     <p>Rsvp For A Session</p>
                    <img
                      src={ArrowRight2}
                      alt='arrow'
                    />
                   </button>
                </div>
              </div>
             
            </>
             
          ))}          
        </div>
    </div>
  )
}



export default BreakoutSession