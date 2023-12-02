import React, { useState, useEffect } from "react";
import { RsvpEvent } from ".";
import { createRsvpEvent } from "../../backend-services/rsvp";
import toast from "react-hot-toast";
import { getEventsData } from "../../backend-services/rsvp";
import { ColorRing } from "react-loader-spinner";
import BreakoutSession from "./BreakoutSession";
import jsPDF from "jspdf";
import QRCode from 'qrcode.react';

const colorsMap = {
  0: "bg-cards-100 text-[#fff]",
  1: "bg-cards-200 text-[#fff]",
  2: "bg-cards-300 text-[#fff]",
  3: "bg-cards-100 text-[#fff]",
  4: "bg-cards-400 text-[#0d0d0d]",
  5: "bg-cards-500 text-[#fff]",
  6: "bg-cards-600 text-[#fff]",
  7: "bg-cards-100 text-[#fff]",
  8: "bg-cards-500 text-[#fff]",
};

const BreakoutSessions = () => {
  const [event1Id, setEvent1Id] = useState(0);
  const [event2Id, setEvent2Id] = useState(0);
  const [event3Id, setEvent3Id] = useState(0);
  const [ticketNumber, setTicketNumber] = useState("");
  const [errorState, setErrorState] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRsvping, setIsRsvping] = useState(false);
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await getEventsData();
        response = response.map((session, idx) => ({
          ...session,
          color: colorsMap[idx],
        }));
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log({ event1Id, event2Id, event3Id });
  }, [event1Id, event2Id, event3Id]);

  const handleTicketNumber = (e) => {
    setErrorState("");
    const { value } = e.target;
    setTicketNumber(value);
  };

  const generatePdf = (userData) => {
    console.log("hello")
    if (!userData) {
      console.error('User data not available');
      return;
    }
    const pdfDoc = new jsPDF()
    pdfDoc.setFontSize(16);
    pdfDoc.text('RSVP Confirmation', 20, 15);
    pdfDoc.setFontSize(14);
    pdfDoc.setTextColor(100, 100, 100);
    pdfDoc.text('List of your selected sessions', 20, 25);
    userData.forEach((user, index) => {
      pdfDoc.setFontSize(12);
      pdfDoc.setTextColor(0, 0, 0);
      pdfDoc.text(`${index + 1}. ${user.title}`, 20, 40 + index * 20);
    });
   const baseImage = document.getElementById("qrcode").toDataURL()
    console.log(baseImage)
    pdfDoc.addImage(baseImage, 'PNG', 80 ,120, 100, 100);
    pdfDoc.save("RsvpConfirmation.pdf")
  };

  const handleTicketFormat = (input) => {
    const pattern = /^DSCA\d{9}$/;
    return pattern.test(input)
  }
 

  const handleRsvpEvent = async (e) => {
    setIsRsvping(true);
    e.preventDefault();
    const ticket = handleTicketFormat(ticketNumber)
    console.log(ticket)
    if(!ticket){
      toast.error("Fill in a valid ticket number", {
        position: "bottom-center"
      })
      setIsRsvping(false)
      return;
    }
    let ticket_id = ticketNumber;
    const data = {
      ticket_id,
      event_ids: [event1Id, event2Id, event3Id],
    };

    let eventCount = 0;
    for (let id of data.event_ids) {
      if (!!Number(id)) eventCount++;
    }
    if (eventCount != 3 || ticketNumber === "") {
      toast.error(
        "Fill in at least 3 required session and your ticket number",
        { position: "bottom-center" }
      );
      setIsRsvping(false);
      return;
    }
    try {
      const response = await createRsvpEvent(data);
      console.log(response)
      setUserData(response)
      generatePdf(response)      
      if (response.status == 202) {
        toast.success(`You have sucessfully RSVPd for ${eventCount} sessions`, {
          position: "bottom-center",
        });
      
      }

    } catch (error) {
      if (error.message === "AxiosError: Request failed with status code 404") {
        toast.error("Ticket not found", { position: "bottom-center" });
      } else if (
        error.message === "AxiosError: Request failed with status code 409"
      ) {
        toast.error("This ticket has RSVPd already", {
          position: "bottom-center",
        });
      }
      setIsRsvping(false)
      console.log(error.message);
      throw new Error(error);
    } finally {
      setIsRsvping(false);
    }
  };


  return (
    <form>

      {(isLoading && data.length == 0) || undefined ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      ) : (
        <>
          <BreakoutSession
            updateEventId={(eventId) => setEvent1Id(eventId)}
            locationId={1}
            eventId={event1Id}
            sessions={data}
          />
          <BreakoutSession
            updateEventId={(eventId) => setEvent2Id(eventId)}
            locationId={2}
            eventId={event2Id}
            sessions={data}
          />
          <BreakoutSession
            updateEventId={(eventId) => setEvent3Id(eventId)}
            locationId={3}
            eventId={event3Id}
            sessions={data}
          />
        </>
      )}
      <RsvpEvent
        ticketNumber={ticketNumber}
        isRsvping={isRsvping}
        handleTicketNumber={handleTicketNumber}
        handleRsvpEvent={handleRsvpEvent}
        errorState={errorState}
      />
      <div className="hidden">
         <QRCode value ={ticketNumber} id='qrcode'/>
      </div>
      
    </form>
  );
};

export default BreakoutSessions;
