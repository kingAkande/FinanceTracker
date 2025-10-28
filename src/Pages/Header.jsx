import React from "react";

const Header = () => {
  return (
    // <div className=" flex text-white mx-auto items-center justify-between bg-[linear-gradient(135deg,#4f46e5,#7c3aed)] p-6">
    //   <h1 className="font-bold lg:text-2xl ">💰 FinanceTracker</h1>
    //   <div className="flex gap-4 items-baseline  font-semibold">
    //     <h1 className="">Zain Abu</h1>
    //     <button className="rounded-full p-2  bg-[#8882f8]">ZD</button>
    //   </div>
    // </div>
    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-5 flex justify-between items-center">
      <div className="text-xl font-bold flex">💰Finance<span className="hidden md:block">Tracker</span> </div>
      <div className="flex items-center gap-3">
        <span className="hidden md:block" >Sulaimon Akande</span>
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          S A
        </div>
      </div>
    </div>
  );
};

export default Header;

//md:w-[690px] lg:w-[768px]
