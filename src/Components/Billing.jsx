import React from 'react'
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse} flex md:flex-row`}>
      <div className={`${layout.sectionImgReverse}`}>
         {/* <img src={bill} alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
         /> */}
      <div className='absolute top-0 z-[3] -left-1/2  w-[50%] h-[50%] 
      rounded-full white__gradient'/>
      <div className='absolute top-0 z-[0] -left-1/2  w-[50%] h-[50%] 
      rounded-full pink__gradient'/>
      </div>
      
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Easily Control <br className='sm:block hidden'/> your billing &
         invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Elit enim sed massa etian. Mouris eu
            adipiscing ultrices ametodio aenean neque. 
            Fusce ipsum orci rhoncus aliportitor integer
            platea placerat.
        </p>
         <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
               {/* <img src={apple} alt="appletore"
                className='w-[120px] h-[42px] object-contain mr-5 cursor-pointer'
               />
                <img src={google} alt="googlepng"
                className='w-[120px] h-[42px] object-contain mr-5 cursor-pointer'
               /> */}
            </div> 
      </div>
            

    </section>
  )
}

export default Billing