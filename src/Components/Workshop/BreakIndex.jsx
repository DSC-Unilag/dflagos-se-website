import React, { useState, useEffect } from 'react'
import { BreakoutSession1, BreakoutSession2, BreakoutSession3, RsvpEvent } from '.'
import { createRsvpEvent } from '../../backend-services/rsvp'
import toast from 'react-hot-toast'
import { getEventsData } from '../../backend-services/rsvp'
import {ColorRing} from "react-loader-spinner"
import { useNavigate } from 'react-router-dom'

const Breaksession = () => {


const [eventId, setEvenId]  = useState({
  value1:undefined,
  value2:undefined,
  value3:undefined
}) 
const [ticketNumber, seticketNumber] = useState("")

const [errorState, setErrorState] = useState("")

const [data, setData] = useState([])

const [isLoading, setIsloading] = useState(false)

const [isRsvping, setIsRsvping] = useState(false)

const navigate = useNavigate()

const arrayValues = Object.values(eventId)


const filteredArray = arrayValues.filter(value => typeof value === 'number');

 const handleGetTicketData = async () => {
  setIsloading(true)
  try {
   const response = await getEventsData()
   setData(response)
  } catch (error) {
    toast.error(error)
  }
  finally{
    setIsloading(false)
  }
}

 useEffect(() => {
  handleGetTicketData()
 }, [])

const handleAddId = (e, id) => {
  const {name, checked} = e.target
 setEvenId({...eventId, [name]: checked ? id : undefined})
}

const handleTicketNumber = (e) => {
  setErrorState("")
   const {value} = e.target
   seticketNumber(value)
}


const handleRsvpEvent = async (e) => {
  setIsRsvping(true)
  e.preventDefault() 
 let event_ids = filteredArray
 let ticket_id = ticketNumber
 const data = {
  ticket_id,
  event_ids
 }
 if(filteredArray.length === 0 || ticketNumber === "") {
 toast.error("Fill in at least a required session and your ticket number") 
 return;
 }
 try {
 const response = await createRsvpEvent(data)
 console.log(response)
 if(response){
  toast.success(`you have sucessfully Rsvp for ${filteredArray.length} sessions`)
 }
 } catch (error) {
  if(error.message === "AxiosError: Request failed with status code 404"){
    toast.error("Ticket not found")
  }
  toast.error(error)
  throw new Error (error)
 }
 finally{
  setIsRsvping(false)
 }

}

console.log(data)


  return (
    <form onSubmit={handleRsvpEvent}>
  {isLoading && data.length == 0 || undefined ?  <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/> 
:
<>
<BreakoutSession1 eventId={eventId} handleAddId={handleAddId} data={data}/>
<BreakoutSession2 eventId={eventId} handleAddId={handleAddId} data={data}/>
<BreakoutSession3 eventId={eventId} handleAddId={handleAddId} data={data}/>
</>
}   
<RsvpEvent ticketNumber={ticketNumber} isRsvping={isRsvping} handleTicketNumber={handleTicketNumber} handleRsvpEvent={handleRsvpEvent} errorState={errorState}/>
  </form>
  )
}

export default Breaksession