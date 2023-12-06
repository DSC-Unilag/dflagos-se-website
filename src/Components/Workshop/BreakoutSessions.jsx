import React, { useState, useEffect } from "react";
import { RsvpEvent } from ".";
import { createRsvpEvent, getTicketDetails } from "../../backend-services/rsvp";
import toast from "react-hot-toast";
import { getEventsData } from "../../backend-services/rsvp";
import { ColorRing } from "react-loader-spinner";
import BreakoutSession from "./BreakoutSession";
import jsPDF from "jspdf";
import { eventIdsStringSeparator } from "../../constants";
import QRCode from "qrcode.react";

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
  9: "bg-cards-200 text-[#fff]",
  10: "bg-cards-300 text-[#fff]",
  11: "bg-cards-100 text-[#fff]",
};

const BreakoutSessions = () => {
  const [event1Id, setEvent1Id] = useState(0);
  const [event2Id, setEvent2Id] = useState(0);
  const [event3Id, setEvent3Id] = useState(0);
  const [event4Id, setEvent4Id] = useState(0);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ticketSessions, setTicketSessions] = useState(null);
  const [ticketNumber, setTicketNumber] = useState("");
  const [isFetchingTicketSessions, setIsFetchingTicketSessions] =
    useState(false);
  const [isRsvping, setIsRsvping] = useState(false);
  const [errorState, setErrorState] = useState("");

  const handleTicketNumber = (e) => {
    setTicketNumber(e.target.value);
  };

  const fetchTicketSessions = async () => {
    if (!ticketNumber) {
      toast.error("Enter a valid ticket number.");
      return;
    }
    setIsFetchingTicketSessions(true);
    try {
      const response = await getTicketDetails(ticketNumber);

      setTicketSessions(response);
      for (let event of response) {
        switch (event.session_id) {
          case 1:
            setEvent1Id(event.id);
            break;
          case 2:
            setEvent2Id(event.id);
            break;
          case 3:
            setEvent3Id(event.id);
            break;
          case 4:
            setEvent4Id(event.id);
            break;
        }
      }
    } catch (e) {
      console.log(e.message);
      if (e.message === "AxiosError: Request failed with status code 404") {
        toast.error("Ticket not found.");
      }
    } finally {
      setIsFetchingTicketSessions(false);
    }
  };

  const generatePdf = (userData) => {
    const pdfDoc = new jsPDF();
    pdfDoc.setFontSize(16);
    pdfDoc.text("RSVP Confirmation", 20, 15);
    pdfDoc.setFontSize(14);
    pdfDoc.text(`Ticket No: ${ticketNumber}`, 20, 30);
    pdfDoc.setTextColor(100, 100, 100);
    pdfDoc.text("Selected Sessions:", 20, 50);
    userData.forEach((user, index) => {
      pdfDoc.setFontSize(12);
      pdfDoc.setTextColor(0, 0, 0);
      pdfDoc.text(`${index + 1}. ${user.title}`, 20, 60 + index * 10);
    });
    const baseImage = document.getElementById("qrcode").toDataURL();
    console.log(baseImage);
    pdfDoc.addImage(baseImage, "PNG", 20, 100, 100, 100);
    pdfDoc.save("DevfestLagosSE_RSVPConfirmation.pdf");
  };

  const handleTicketFormat = (input) => {
    const pattern = /^DSCA\d{9}$/;
    return pattern.test(input);
  };

  const handleRsvpEvent = async (e) => {
    setIsRsvping(true);
    e.preventDefault();
    const ticket = handleTicketFormat(ticketNumber);
    console.log(ticket);
    if (!ticket) {
      toast.error("Fill in a valid ticket number", {
        position: "bottom-center",
      });
      setIsRsvping(false);
      return;
    }
    let ticket_id = ticketNumber;
    const data = {
      event_ids: [event1Id, event2Id, event3Id, event4Id],
    };

    let eventCount = 0;
    for (let id of data.event_ids) {
      if (!!Number(id)) eventCount++;
    }
    if (eventCount != 4 || ticketNumber === "") {
      toast.error(
        "Fill in at least 4 required session and your ticket number",
        { position: "bottom-center" }
      );
      setIsRsvping(false);
      return;
    }
    try {
      const response = await createRsvpEvent(ticketNumber, data);
      generatePdf(response);
      if (response) {
        toast.success(
          `You have sucessfully RSVPd for ${eventCount} sessions. Present your RSVP Confirmation at the breakout session venue.`,
          {
            position: "bottom-center",
          }
        );
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
      setIsRsvping(false);
      console.log(error.message);
      throw new Error(error);
    } finally {
      setIsRsvping(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await getEventsData();
        console.log(response);
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

  return (
    <div className="ticket-container mt-8">
      <form>
        <RsvpEvent
          ticketNumber={ticketNumber}
          isLoading={isRsvping || isFetchingTicketSessions}
          hasLoadedTicket={!!ticketSessions}
          handleTicketNumber={handleTicketNumber}
          loadTicketSessions={(e) => {
            e.preventDefault();
            fetchTicketSessions();
          }}
          errorState={errorState}
        />
        {!!ticketSessions &&
          (!!!data ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper mx-auto"
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
              <BreakoutSession
                updateEventId={(eventId) => setEvent4Id(eventId)}
                locationId={4}
                eventId={event4Id}
                sessions={data}
              />
              <button
                type="submit"
                onClick={isRsvping ? () => {} : handleRsvpEvent}
                className="text-[#000] border-2 border-[#000] rounded-[48px] bg-[#FFFAEB] p-4 lg:max-w-[250px] mb-0 w-full md:block md:w-auto md:shrink-0 md:ml-20"
              >
                <ColorRing
                  visible={isRsvping}
                  height="40"
                  width="40"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="mx-auto"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />

                {!isRsvping && "RSVP for Selected Sessions"}
              </button>
            </>
          ))}
      </form>
      <div className="hidden">
        <QRCode value={ticketNumber} id="qrcode" />
      </div>
    </div>
  );
};

export default BreakoutSessions;
