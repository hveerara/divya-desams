import React from "react";
import { getCurrentYear } from "../lib/util";

export default function Footer() {
  return (
    <footer className="bg-[#a16207] w-full sticky bottom-0 font-poppins flex flex-wrap p-3 flex-row sm:flex-col xs:flex-col">
      <div className="container flex flex-col min-w-screen mx-auto items-center justify-center ">
        <span className="items-center justify-center break-words text-white">
          © Dr. D. Veeraragavathatham {getCurrentYear()} - All rights reserved
        </span>
      </div>
    </footer>
  );
}
