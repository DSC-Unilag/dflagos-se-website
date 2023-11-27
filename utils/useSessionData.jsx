import React, {useState} from 'react'
import { getEventsData } from '../src/backend-services/rsvp'

const useSessionData = () => {

  const [data, setData] = useState([])


  const getTicketData = async () => {
   const data =  await getEventsData()
   console.log(data)
  }



  return {
    data,
    getTicketData
  }
}

export default useSessionData