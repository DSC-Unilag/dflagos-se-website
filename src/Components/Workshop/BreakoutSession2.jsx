import React, {useState, useEffect} from 'react'
import { breakoutSessionData } from '../../constants'
import { ArrowRight2 } from '../../assets'

const BreakoutSession = ({handleAddId, eventId, data}) => {

  const [isSelected, setIsSelected] = useState(false)
  
  const [checkedStates, setCheckedStates] = useState([false, false, false]);


 const handleChange = (e, index, id) => {

  const updatedCheckedStates = checkedStates.map((state, i) => i === index ? !state : state);
  setCheckedStates(updatedCheckedStates);
  handleAddId(e, id)
 }

 const filteredData = data.filter((item) => item.id >= 4 && item.id <= 6)


  return (
    <div>
        
        <div className='p-[10px] py-[30px] border-[2px] border-dashed border-[#0D0D0D] mt-[24px] mb-[40px] rounded-[16px]'>

        <button className='bg-[#F9AB00] py-[8px] px-[16px] rounded-[8px] text-[#000] mb-[16px]'>BreakoutSession 2</button>
          {filteredData.map((item, index) => (
            <div key={index} className={`session flex flex-col px-[10px] py-[15px] md:p-[30px] rounded-[16px] ${index == 2 ? "mb-[0]" : "mb-[16px]"} ${index == 0 && "bg-[#EA4335]"} ${index == 1 && "bg-[#34A853]"} ${index == 2 && "bg-[#4285F4]"}   sxl:py-[56px] sxl:px-[24px]`}>
              <div className='text-[#fff]'>
                <p className=''>11.00am - 12.00am</p>
                <p className='mt-[24px] mb-[16px]'>{item.title}</p>
                <p>{item.speaker ? item.speaker : "Temilola Peter - Product Designer, Google."} </p>
              </div> 

                <div className='pt-[36px] flex flex-row gap-[13.5px] items-center'>
               <input
              type='checkbox'
              name='value2'
              className='w-[40px] h-[40px]'
              value={eventId.value2}
              onChange={(e) => handleChange(e, index, item.id)}
              checked={checkedStates[index]}
              disabled={checkedStates.some((state, i) => i !== index && state)}
            />
             <p>Select this session</p>
              </div>
               
              </div>
          ))}
        </div>
    </div>
  )
}

export default BreakoutSession
