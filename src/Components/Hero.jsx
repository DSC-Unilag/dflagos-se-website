import React from "react";
import { ArrowRight } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="mx-auto">
      <div className="flex flex-col lg:flex-row pl-[25px] pr-[20px] lg:pr-0 sm:pl-[124px] lg:pl-0 lg:mx-auto lg:relative lg:left-[50%] lg:-translate-x-1/2 justify-between lg:justify-center mb-[40px] sm:mb-[40px] lg:mb-0">
        <div className="">
          <p
            className=" mt-[40px] lg:pb-[123px] text-[50px] xs:text-[55px] sm:text-[71px]  leading-none max-w-full lg:max-w-[667px]  text-[#000] tracking-tighter italic font-extrabold lg:mr-[70px]"
            style={{ fontWeight: 500 }}
          >
            DevFest Lagos <br className="hidden xs:block" />Student Edition
          </p>
        </div>

        <div className="hidden lg:flex">
          <div className="hidden sm:block border-l border-[#4285F4] " />
        </div>

        <div className="flex flex-col lg:py-11 lg:ml-[70px]">
          <p className="md:max-w-[470px] lg:max-w-[470px] mt-[45px] lg:mt-0 text-[#000] font-normal text-[24px] tracking-[-1.5px] leading-[34.2px] italic">
            Ultimate one-day event with speakers across Artificial Intelligence,
            Product, Mobile, Cloud, Intellectual Property and Startup Funding,
            Policy & Governance, and so much more!
          </p>

          <a
            href="https://dscunilag.dev/df_lagos"
            className="flex flex-row mt-[40px] sm:mb-[50px] md:mb-0 justify-center items-center gap-[8px] rounded-[48px] py-[12px] px-[30px] bg-[#4285F4] hover:bg-blue-600 max-w-[293px]"
          >
            <p className="text-[#fff] font-bold">Grab A Free Ticket</p>
            <img src={ArrowRight} alt="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
