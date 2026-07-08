import React from "react";
import { RiFacebookFill, RiLinkedinFill, RiGithubFill, RiTwitterXFill } from "@remixicon/react";

const Footer = () => {
  return (
    <div className="w-full " >
      <div className="bg-gray-800 text-white flex flex-col justify-center items-center gap-5">
        <h1 className="text-2xl font-bold p-1">Stock Analysis</h1>
        <div className="bg-gray-400 h-0.5 w-full"></div>
        <p className="text-center text-sm">
          Discover market trends, explore company insights, and follow the
          latest stock news. Designed for <br /> investors who value clarity, accuracy,
          and simplicity.
        </p>
        {/* follow link */}
        <div className="flex gap-5 p-2">
          <RiFacebookFill />
          <RiLinkedinFill />
          <RiGithubFill />
          <RiTwitterXFill />
        </div>
      </div>
      <div className="bg-gray-900 text-white">
        <h1 className="text-center p-2 text-sm">Copyright ©2026 StockAnalysis, Designed By Aman Singh</h1>
      </div>
    </div>
  );
};

export default Footer;
