import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-full">
      <div className="logo font-bold text-white sm:text-2xl ">
        <span className="text-green-500">&lt;</span>
        <span>Pass</span>
        <span className="text-green-500">OP/&gt;</span>
      </div>
      <div className="flex justify-center items-center text-xs sm:text-[16px]">
        Created with <img className="w-7 mx-2" src="icons/heart.png" alt="" />
        by Sagar
      </div>
    </div>
  );
};

export default Footer;
