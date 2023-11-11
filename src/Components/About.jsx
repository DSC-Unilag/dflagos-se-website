import React from 'react'

const About = () => {
  return (
    <div className='pt-[40px] lg:pt-[92px]'>

     <div className='flex flex-col w-full lg:h-[50vh]'>
       <h1 className='lg:max-w-[253px] text-[40px] lg:text-[94px] leading-none tracking-normal' style={{fontWeight: 700}}>About <br/>Event</h1>
     
     <div className='w-full flex mt-[24px] lg:pl-[305px]'>
        <div className='border-y-2 border-[#4285F4] w-[100%]'>
           <div className='flex flex-col sm:flex-row'>
             
             <p className='lg:max-w-[402px] pr-[14px] py-[19px]'>
             DevFestStudent’s Edition 2023 - is the first edition held specially 
             for students with the aim of bringing technology closer to Students 
             and tech enthusiasts passionate about technology.
             </p>
            <div className='hidden sm:block border-l-2 border-[#4285F4] '/>

              <p className='lg:max-w-[434px] py-[19px] sm:pl-[37px]'>
              Held in over 20 countries around the world, this is not just an event but a PLATFORM 
              connecting Students with expert developers, and Tech enthusiasts 
              </p>
           </div>
        </div>
     </div>

     </div>
    </div>
  )
}

export default About