import React, { useState, useEffect } from "react";
import { RsvpEvent } from ".";
import { createRsvpEvent } from "../../backend-services/rsvp";
import toast from "react-hot-toast";
import { getEventsData } from "../../backend-services/rsvp";
import { ColorRing } from "react-loader-spinner";
import BreakoutSession from "./BreakoutSession";

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

  const handleRsvpEvent = async (e) => {
    setIsRsvping(true);
    e.preventDefault();
    let ticket_id = ticketNumber;
    const data = {
      ticket_id,
      event_ids: [event1Id, event2Id, event3Id],
    };

    let eventCount = 0;
    for (let id of data.event_ids) {
      if (!!Number(id)) eventCount++;
    }
    if (!eventCount || ticketNumber === "") {
      toast.error(
        "Fill in at least a required session and your ticket number",
        { position: "bottom-center" }
      );
      setIsRsvping(false);
      return;
    }
    try {
      const response = await createRsvpEvent(data);
      if (response.status == 202) {
        toast.success(`You have sucessfully RSVPd for ${eventCount} sessions`, {
          position: "bottom-center",
        });
      }
    } catch (error) {
      if (error.message === "AxiosError: Request failed with status code 404") {
        toast.error("Ticket not found", { position: "bottom-center" });
      } else if (
        error.message === "AxiosError: Request failed with status code 500"
      ) {
        toast.error("This ticket has RSVPd already", {
          position: "bottom-center",
        });
      }
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
    </form>
  );
};

export default BreakoutSessions;
