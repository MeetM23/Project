import React, { useState } from "react";
import { img } from "../constants";
import MyButton from "./MyButton";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="w-full ">
      <nav className="flex  item-center justify-between  py-5 px-5 w-full">
        {/* logo */}
        <div>
          <img src={img.logo} alt="" className="w-10 h-10" />
        </div>

        <div className="flex bg-white text-sm rounded-full justify-center items-center gap-10 px-8 ">
          <a
            href=""
            className="  text-black font-normal font-axiforma transition-all duration-300"
          >
            Home
          </a>
          <a
            href=""
            className=" text-black  font-normal font-axiforma transition-all duration-300"
          >
            About
          </a>
          <a
            href=""
            className=" text-black font-normal font-axiforma transition-all duration-300"
          >
            Contact Us
          </a>

          {/* button sign login */}
        </div>
        <div className="hidden lg:flex item-center justify-center gap-5">
          <MyButton buttonClass="bg-white rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
            Sign In
          </MyButton>
          <MyButton buttonClass="bg-white rounded-full hover:bg-orange-500  hover:text-white transition-all duration-300">
            Login
          </MyButton>
        </div>
        <div
          onClick={handleMenu}
          className="relative block  lg:hidden text-white pt-3 text-xl "
        >
          <FiMenu />
        </div>
      </nav>
      <div
        className={`${
          open ? "flex flex-col" : "hidden"
        } absolute top-20 w-[400px] z-1 bg-[rgba(255,255,255,0.8)] backdrop-blur-md left-[50%] translate-x-[-50%] rounded-2xl  transition-all  duration-300 items-center py-8 `}
      >
        <div className="flex flex-col gap-5">
          <MyButton buttonClass="bg-white rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
            Sign In
          </MyButton>
          <MyButton buttonClass="bg-white rounded-full hover:bg-orange-500  hover:text-white transition-all duration-300">
            Login
          </MyButton>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
