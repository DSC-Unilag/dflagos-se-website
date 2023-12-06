import React, { useState } from "react";
import { RsvpEvent } from ".";
import { ColorRing } from "react-loader-spinner";


const BreakoutIndex = () => {
    const [isLoading, setIsloading] = useState(false);

    const [data, setData] = useState([]);

    const [ticketNumber, setTicketNumber] = useState("");

    const [isRsvping, setIsRsvping] = useState(false);

    const [errorState, setErrorState] = useState("");

    const handleTicketNumber = () => {}


    const handleRsvpEvent = async (e) => {
        e.preventDefault();
        setIsloading(true);
        setIsRsvping(true);
    }

    return (
        <div className="ticket-container mb-[200px]">
            <form onSubmit={handleRsvpEvent}>
                <RsvpEvent
                    ticketNumber={ticketNumber}
                    isRsvping={isRsvping}
                    handleTicketNumber={handleTicketNumber}
                    handleRsvpEvent={handleRsvpEvent}
                    errorState={errorState}
                />
            </form>

            {(isLoading && data.length == 0) && (
                <div className="color-ring">
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
                    />
                </div>
            )}
        </div>
    )
}

export default BreakoutIndex;