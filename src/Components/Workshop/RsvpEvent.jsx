import { useState } from "react";
const RsvpEvent = ({
  ticketNumber,
  handleTicketNumber,
  handleRsvpEvent,
  errorState,
  isRsvping,
}) => {
  return (
    <div className="mt-[80px] mb-[30px]">
      <p className="text-[24px] text-center mb-10 leading-[38.25px] tracking-tighter">
        RSVP for breakout sessions by entering your ticket number.
      </p>
      <div className="mt-4 border-4 border-[#0d0d0d] bg-[#FFFAEB] rounded-[64px] p-4 mb-4 md:flex">
        <input
          onChange={handleTicketNumber}
          type="text"
          value={ticketNumber}
          name="ticketNumber"
          className="px-4 py-3 rounded-[64px] w-full border-2 border-[#000000]"
          placeholder="Enter your ticket number E.g DSCA231907690"
        />
        <button
          type="submit"
          onClick={isRsvping ? () => {} : handleRsvpEvent}
          className="text-[#000] border-2 border-[#000]  rounded-[48px] bg-[#FFFAEB] p-4 lg:max-w-[250px] mb-0 w-full hidden md:block md:w-auto md:shrink-0 md:ml-20"
        >
          <p className="font-bold">
            {isRsvping ? "Please wait...." : "RSVP For Selected Sessions"}
          </p>
        </button>
      </div>
      <button
        type="submit"
        onClick={isRsvping ? () => {} : handleRsvpEvent}
        className="text-[#000] border-2 border-[#000]  rounded-[48px] bg-[#FFFAEB] p-4 lg:max-w-[250px] mb-0 w-full md:hidden"
      >
        <p className="font-bold">
          {isRsvping ? "Please wait...." : "RSVP For Selected Sessions"}
        </p>
      </button>
      <p className="text-red-500 ml-[10px]">{errorState}</p>
    </div>
  );
};

export default RsvpEvent;
