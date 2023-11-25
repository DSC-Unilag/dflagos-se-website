import axios from "axios";

export const getEventsData = async () => {
   try {
     const response = await axios.get("https://dfrsvpapi.azurewebsites.net/rsvp/events")
     return response.data.data 
   } catch (error) {
      console.log(error)
   }
   
}

export const createRsvpEvent = async (data) => {
    try {
      const response = await axios.post("https://dfrsvpapi.azurewebsites.net/rsvp", data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
}