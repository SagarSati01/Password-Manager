import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800  text-white">
      <div className="mx-auto container flex justify-around items-center px-4 py-5 h-14 ">
        <div className="logo font-bold text-white sm:text-2xl ">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </div>
        <button className="text-white bg-green-700  my-5 mx-2 rounded-full flex justify-betweeen items-center ring ring-white cursor-pointer">
          <img className="invert p-1 w-7 sm:w-10" src="/icons/github.svg" alt="github" />
          <span className="font-bold text-sm px-0 sm:px-2">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
