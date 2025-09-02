import React from "react";

const Header = () => {
  return (
    <div className="w-[320px] flex items-center justify-between">
      <h1>💰 FinanceTracker</h1>
      <div className="flex gap-4 items-baseline ">
        <h1>Zain Abu</h1>
        <button className="rounded-full p-2 bg-amber-400">ZD</button>
      </div>
    </div>
  );
};

export default Header;
