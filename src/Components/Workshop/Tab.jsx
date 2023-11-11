import React, {useState} from 'react'
import { Tabs } from '../../constants'

const Tab = () => {

    const [indexState, setIndexState] = useState(0)
    const handleClick = (index) => {
     setIndexState(index)
    }
  return (
    <div className='mt-[49px] w-full'>
        <div className='bg-[#FDE293] px-[36px] flex justify-around gap-[40px] border-[4px] h-[75px] border-[#0D0D0D] rounded-[16px]'>
         {Tabs.map((item, index) => (
            <button onClick={() => handleClick(index)} className={`text-[18px] ${index == indexState ? "bg-[#F9AB00] py-[8px] px-[16px] rounded-[8px] text-[#000] my-[8px]": ""}`}>
                {item.content}
            </button>
         ))}
        </div>
    </div>
  )
}



export default Tab