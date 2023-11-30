import React from "react";
import { ArrowRight2, EventImage } from "../assets";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/workshops");
  };
  return (
    <div className="pt-[64px]">
      <div className="flex flex-col pb-12 lg:flex-row gap-[21.5px] lg:gap-[21.5px]">
        <div className="flex flex-col text-[#fff] lg:pb-[164px]">
          <p className="text-[44px] lg:text-[64px] font-bold mb-6">
            Guess What? <br />
            Its FREE
          </p>

          <p className="max-w-[493px] text-[24px] font-bold mb-5">
            Get FREE tickets to connect, explore a world of ever evolving
            digital experiences.
          </p>

          <a
            href="https://dscunilag.dev/df_lagos"
            className="flex flex-row mt-[40px] text-[#000] border border-[#000] sm:mb-[50px] md:mb-0 justify-center items-center gap-[8px] rounded-[48px] py-[12px] px-[30px] bg-[#FFFAEB] hover:bg-[#dcd1b2] max-w-[293px]"
          >
            <p className=" font-bold">Grab A Free Ticket</p>
            <img src={ArrowRight2} alt="arrow" />
          </a>
        </div>

        <div className="">
          <img src={EventImage} alt="event" />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
