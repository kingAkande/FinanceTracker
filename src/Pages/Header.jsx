import React from "react";

const Header = () => {
  return (
    <div className="w-[320px] flex text-white mx-auto items-center justify-between bg-[#4f46e5] p-6">
      <h1 className="font-bold ">💰 FinanceTracker</h1>
      <div className="flex gap-4 items-baseline ">
        <h1 className="">Zain Abu</h1>
        <button className="rounded-full p-2 bg-amber-400">ZD</button>
      </div>
    </div>
  );
};

export default Header;


//md:w-[690px] lg:w-[768px]