import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-[#a16207] sticky top-0 z-10 w-full font-poppins">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row sm:flex-row xs:flex-row justify-center items-center">
        <nav className="sticky top-0 z-10 w-full font-poppinsmd:mr-auto md:ml-4 md:border-l md:border-gray-700	flex flex-wrap break-words items-center text-base justify-center">
          <NavLink
            to="/"
            className="ml-2 mr-4 xs:text-sm sm:text-md md:text-lg lg:text-xl text-2xl bold title-font text-white hover:text-black hover:font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="ml-2 mr-4 xs:text-sm sm:text-md md:text-lg lg:text-xl text-2xl bold title-font  text-white hover:text-black hover:font-bold"
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
