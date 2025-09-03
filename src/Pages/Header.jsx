import React from "react";

const Header = () => {
  return (
    <div className="w-[320px] lg:w-[768px]  flex text-white mx-auto items-center justify-between bg-[#443cd6] p-6">
      <h1 className="font-bold lg:text-2xl ">💰 FinanceTracker</h1>
      <div className="flex gap-4 items-baseline  font-semibold">
        <h1 className="">Zain Abu</h1>
        <button className="rounded-full p-2  bg-[#8882f8]">ZD</button>
      </div>
    </div>
  );
};

export default Header;


//md:w-[690px] lg:w-[768px]