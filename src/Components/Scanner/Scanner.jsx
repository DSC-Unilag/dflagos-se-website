import { useState } from "react";
import Navbar from "../Navbar";
import { breakoutLocationCodes, timeCodes } from "../../constants";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { ColorRing } from "react-loader-spinner";
import { verifyTicketID } from "../../backend-services/rsvp";
import toast from "react-hot-toast";
import checkmark from "./../../assets/checkmark.svg";
import invalid from "./../../assets/invalid.svg";

const LOADING_STATES = {
  loading: "loading",
  success: "success",
  error: "error",
};

export const Scanner = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerificationLoading, setIsVerificationLoading] = useState(false);
  const [venueCode, setVenueCode] = useState("");
  const [loadingState, setLoadingState] = useState(LOADING_STATES.loading);
  const [timeCode, setTimeCode] = useState("");
  const [advanceTimeCode, setAdvanceTimeCode] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (breakoutLocationCodes.includes(venueCode)) {
      setIsLoggedIn(true);
    }
  };

  const verifySession = async (ticketId) => {
    if (!ticketId || !venueCode || !timeCode) {
      return toast.error("Fill in all required info");
    }

    setIsVerificationLoading(true);
    const data = {
      ticket_id: ticketId,
      venue_id: venueCode,
      time_code: timeCodes[timeCode],
    };
    try {
      const response = await verifyTicketID(data);
      const { status, code, msg } = response;
      if (code == 20) {
        toast.success(msg);
        setLoadingState(LOADING_STATES.success);
        setTimeCode("");
        setTimeout(() => {
          setLoadingState(LOADING_STATES.loading);
        }, 2500);
      }
    } catch (e) {
      if (e?.response?.data) {
        const { status, code, msg } = e.response.data;
        if (code >= 10 && code <= 13) {
          toast.error(msg);
          setLoadingState(LOADING_STATES.error);
          setTimeCode("");
          setTimeout(() => {
            setLoadingState(LOADING_STATES.loading);
          }, 2500);
        }
      } else {
        toast.error("Something went wrong. Please try again.");
        console.log(e.message);
      }
    } finally {
      setIsVerificationLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-[980px] mx-auto px-6">
        <Navbar id="banner-nav" />
      </div>
      {!isLoggedIn ? (
        <div className="get-banner flex justify-center items-center">
          <h2 className="font-bold text-[40px] text-center tracking-[-2.5px] mb-4 ">
            Login to QR Code Scanner
          </h2>
          <form className="max-w-[350px] mx-auto  relative top-1/2">
            <label>
              Breakout Session Location Code
              <input
                type="password"
                className="mx-auto block p-2 border-2 rounded-lg border-[#ccc]"
                value={venueCode}
                onChange={(e) => setVenueCode(e.target.value)}
              />
            </label>
            <button className="mx-auto block" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      ) : (
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
          }}
          className="px-6 pt-[10%]"
        >
          <span id="bannerText">
            <h1
              style={{
                fontWeight: "bold",
                lineHeight: "110%",
                marginBottom: "10px",
              }}
              className="text-6xl"
            >
              Scanner
            </h1>
          </span>
          <ColorRing
            visible={isVerificationLoading}
            height="40"
            width="40"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="mx-auto"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
          {!isVerificationLoading &&
            loadingState == LOADING_STATES.loading &&
            (!!timeCode && advanceTimeCode ? (
              <>
                <p>Scan the QR Code of attendees to see their information</p>
                <QrScanner
                  constraints={{ facingMode: "environment" }}
                  onDecode={(result) => verifySession(result)}
                  onError={(error) => console.log(error?.message)}
                />
              </>
            ) : (
              <>
                <label
                  className="font-bold my-4 block text-lg"
                  htmlFor="timecode"
                >
                  Time Code:
                  <select
                    className="inline-block ml-2 p-2"
                    id="timecode"
                    defaultValue="default"
                    onChange={(e) => setTimeCode(e.target.value)}
                  >
                    <option value="default" disabled>
                      Select a time code
                    </option>
                    {Array(4)
                      .fill(0)
                      .map((_, idx) => (
                        <option key={idx} value={idx + 1}>
                          {" "}
                          Breakout Session {idx + 1}
                        </option>
                      ))}
                  </select>
                </label>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setAdvanceTimeCode(true);
                  }}
                  className="text-[#000] border-2 border-[#000] rounded-[48px] bg-[#FFFAEB] p-4 mb-0 w-[200px] mx-auto block font-bold"
                >
                  Next
                </button>
              </>
            ))}

          {loadingState == LOADING_STATES.success && (
            <img src={checkmark} alt="success" />
          )}
          {loadingState == LOADING_STATES.error && (
            <img src={invalid} alt="failure" />
          )}
        </div>
      )}
    </div>
  );
};
