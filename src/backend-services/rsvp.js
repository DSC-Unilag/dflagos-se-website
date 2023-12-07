import axios from "axios";

export const getEventsData = async () => {
  try {
    const response = await axios.get(
      "https://dfrsvpapi.azurewebsites.net/rsvp/events"
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const verifyTicketID = async (data) => {
  try {
    const response = await axios.post(
      "https://dfrsvpapi.azurewebsites.net/venue/verify",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createRsvpEvent = async (ticketId, data) => {
  try {
    const response = await axios.put(
      `https://dfrsvpapi.azurewebsites.net/rsvp/${ticketId}`,
      data
    );
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getTicketDetails = async (ticketId) => {
  try {
    const response = await axios.get(
      `https://dfrsvpapi.azurewebsites.net/rsvp/${ticketId}`
    );
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
