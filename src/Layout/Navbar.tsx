import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Project", path: "/project" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-[86px] flex justify-center items-center mt-5">
      <div className="w-[95%] h-full rounded-[50px]  bg-transparent md:bg-[#171717] flex justify-center items-center">
        <div className="flex  items-center gap-2">
          <div className="w-11 h-11 bg-[#FD853A]  rounded-full flex justify-center items-center font-[lufga] text-white leading-4 lg:leading-5 text-base lg:text-lg">
            IM
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-black md:text-white font-[lufga] text-lg font-bold">Ilaha</h2>
            <p className="text-black md:text-white font-[lufga] text-lg font-bold">Mammadova</p>
          </div>
        </div>
        <div className="lg:hidden flex justify-between items-center w-full">
             <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
        <div className={`w-[75%] lg:w-[80%]   ${
    isOpen
      ? "opacity-100 scale-y-100 pointer-events-auto"
      : "opacity-0 scale-y-0 pointer-events-none"
  }`}>
            <ul className="w-full flex justify-center items-center gap-3 xl:gap-5">
          {navItems.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `text-[20px] font-[lufga] text-white md:px-4 md:py-2  lg:py-3 lg:px-8 xl:py-4 xl:px-12 rounded-4xl ${
                  isActive ? "bg-[#FD853A] " : "hover:bg-[#ffffff4a]"
                }`
              }
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
