import { ColorRing } from "react-loader-spinner";
import arrow from "../../assets/bannerArrow.svg";
const RsvpEvent = ({
  ticketNumber,
  handleTicketNumber,
  loadTicketSessions,
  hasLoadedTicket,
  errorState,
  isLoading,
}) => {
  return (
    <div className="mt-[80px] mb-[30px]">
      <ColorRing
        visible={true}
        height="0"
        width="0"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="mx-auto opacity-0"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      <p className="text-[24px] text-center mb-10 leading-[38.25px] tracking-tighter">
        RSVP for breakout sessions by entering your ticket number.
      </p>
      <div className="mt-4 border-4 border-[#0d0d0d] bg-[#FFFAEB] rounded-[64px] p-4 mb-4 flex">
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
          onClick={isLoading ? () => {} : loadTicketSessions}
          className=""
        >
          <ColorRing
            visible={isLoading}
            height="40"
            width="40"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="mx-auto"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />

          {!isLoading && (
            <img className="w-[50px] block shrink-0" src={arrow} />
          )}
        </button>
      </div>

      <p className="text-red-500 ml-[10px]">{errorState}</p>
    </div>
  );
};

export default RsvpEvent;
