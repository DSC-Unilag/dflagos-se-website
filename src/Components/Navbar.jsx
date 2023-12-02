import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";
import logo from "./../assets/devfest logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar px-6">
      <Link className="w-[120px]" to={"/"}>
        <img src={logo} alt={"Hoobank image"} />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] mr-3
              ${
                index === navLinks.length - 1
                  ? "[&]:mr-0"
                  : "[&]:mr-6 [&]:lg:mr-10"
              } text-black`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <span
          className="text-[30px]"
          onClick={() => setToggle((prev) => !prev)}
        >
          {<HiOutlineMenu />}{" "}
        </span>
      </div>
      <div
        className={`${
          toggle ? "flex flex-row" : "hidden"
        }  bg-[#fff] pt-[40px] w-[60%] px-[14px] shadow-xl absolute top-[20px] right-0 h-[100%] 
          sidebar z-20`}
      >
        <ul className="list-none flex flex-col flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] mr-3
              ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} text-black`}
            >
              <Link to={`${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <span className="text-[30px]" onClick={() => setToggle(false)}>
          <AiOutlineClose />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
