import React, { useState, useEffect } from "react";
import {
  BreakoutSession1,
  BreakoutSession2,
  BreakoutSession3,
  RsvpEvent,
} from ".";
import { createRsvpEvent } from "../../backend-services/rsvp";
import toast from "react-hot-toast";
import { getEventsData } from "../../backend-services/rsvp";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import BreakoutSession from "./BreakoutSession";
import QRCode from 'qrcode.react';
import jsPDF from 'jspdf';

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

const Breaksession = () => {
  const [eventId, setEvenId] = useState({
    value1: undefined,
    value2: undefined,
    value3: undefined,
  });
  const [ticketNumber, seticketNumber] = useState("");

  const [errorState, setErrorState] = useState("");

  const [data, setData] = useState([]);

  const [userData, setUserData] = useState([])

  const [isLoading, setIsloading] = useState(false);

  const [isRsvping, setIsRsvping] = useState(false);

  const navigate = useNavigate();

  const arrayValues = Object.values(eventId);

  const filteredArray = arrayValues.filter(
    (value) => typeof value === "number"
  );

  const handleGetTicketData = async () => {
    setIsloading(true);
    try {
      let response = await getEventsData();
      console.log(response);
      response = response.map((session, idx) => ({
        ...session,
        color: colorsMap[idx],
      }));
      setData(response);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    handleGetTicketData();
  }, []);

  const handleAddId = (e, id) => {
    const { name, checked } = e.target;
    setEvenId({ ...eventId, [name]: checked ? id : undefined });
  };

 const generatePdf = () => {
    const pdfDoc = new jsPDF()
    pdfDoc.text(`Name: ${userData.name[0].speaker}`, 20, 20);
    pdfDoc.text(`Email: ${userData[0].title}`, 20, 30);

    // Generate QR code and add it to the PDF
    const qrCodeDataUrl = document.getElementById('qrcode').toDataURL('image/png');
    pdfDoc.addImage(qrCodeDataUrl, 'PNG', 20, 40, 30, 30);

    // Save the PDF to a data URL
    const pdfDataUrl = pdfDoc.output('datauristring');

    // Open the PDF in a new tab
    window.open(pdfDataUrl, '_blank');
  }
  const handleTicketNumber = (e) => {
    setErrorState("");
    const { value } = e.target;
    seticketNumber(value);
  };

  const handleRsvpEvent = async (e) => {
    setIsRsvping(true);
    e.preventDefault();
    let event_ids = filteredArray;
    let ticket_id = ticketNumber;
    const data = {
      ticket_id,
      event_ids,
    };
    if (filteredArray.length === 0 || ticketNumber === "") {
      toast.error("Fill in at least a required session and your ticket number");
      return;
    }
    try {
      const response = await createRsvpEvent(data);
      setUserData(response)
      console.log(userData)
      if (response) {
        toast.success(
          `you have sucessfully Rsvp for ${filteredArray.length} sessions`
        );
      }
      generatePdf()
    } catch (error) {
      setIsRsvping(true)
      if (error.message === "AxiosError: Request failed with status code 404") {
        toast.error("Ticket not found");
      }
      throw new Error(error);
    } finally {
      setIsRsvping(false);
    }
  };

 console.log(userData)

  return (
    <form onSubmit={handleRsvpEvent}>
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
          <BreakoutSession eventId={eventId} locationId={1} sessions={data} />
          <BreakoutSession eventId={eventId} locationId={2} sessions={data} />
          <BreakoutSession eventId={eventId} locationId={3} sessions={data} />
        </>
      )}
      <RsvpEvent
        ticketNumber={ticketNumber}
        isRsvping={isRsvping}
        handleTicketNumber={handleTicketNumber}
        handleRsvpEvent={handleRsvpEvent}
        errorState={errorState}
      />
      <div id="qrcode"></div>
    </form>
  );
};

export default Breaksession;
