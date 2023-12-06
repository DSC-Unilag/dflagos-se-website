import { useState } from "react";
import Navbar from "../Navbar";
import { breakoutLocationCodes } from "../../constants";
import { QrScanner } from "@yudiel/react-qr-scanner";

export const Scanner = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [code, setCode] = useState("");
  const [qrCodeData, setQrCodeData] = useState("No result");

  const handleLogin = (e) => {
    e.preventDefault();
    if (breakoutLocationCodes.includes(code)) {
      setIsLoggedIn(true);
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
                className="mx-auto block border-2 rounded-lg border-[#ccc]"
                value={code}
                onChange={(e) => setCode(e.target.value)}
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
          className="get-banner px-6"
        >
          <span id="bannerText">
            <h1
              style={{
                fontWeight: "bold",
                lineHeight: "110%",
                marginBottom: "10px",
              }}
            >
              Scanner
            </h1>
          </span>
          <p>Scan the QR Code of attendees to see their information</p>
          <QrScanner
            onDecode={(result) => console.log(result)}
            onError={(error) => console.log(error?.message)}
          />
        </div>
      )}
    </div>
  );
};
