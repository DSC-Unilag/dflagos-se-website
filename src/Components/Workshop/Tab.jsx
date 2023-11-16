import React, {useState} from 'react'
import { Tabs } from '../../constants'
import '../../App.css';

const Tab = () => {

    const [indexState, setIndexState] = useState(0)
    const handleClick = (index) => {
     setIndexState(index)
    }
  return (
    <div className='tab mt-[49px] w-full'>
        <div className='tab-flex h-[75px] bg-[] border-[#0D0D0D] rounded-[16px]'>
         {Tabs.map((item, index) => (
            <button key={index} onClick={() => handleClick(index)} className={`text-[18px] p-[15px] ${index == indexState ? "bg-[#F9AB00] py-[8px] px-[16px] rounded-[8px] text-[#000] my-[8px] tab-button": "tab-button"}`}>
                {item.content}
            </button>
         ))}
        </div>
    </div>
  ) 
}



export default Tab