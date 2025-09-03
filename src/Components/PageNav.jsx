import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Pages/Header";

const PageNav = () => {
  return (
    <nav className="flex flex-wrap  mx-auto justify-center text-sm  font-medium w-[320px] gap-[14px] p-2 bg">
      {/* <div> 
        <NavLink to="/header">Header</NavLink>
      </div> */}
      {/* <div>
        <NavLink to="/login">Login</NavLink>
      </div> */}
      <div>
        <NavLink to="/dashboard">
          <Button name="Dashboard" emoji="🏠" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/transaction">
          <Button name="Transaction" emoji="💳" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/report">
          <Button name="Report" emoji="📊" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/budget">
          <Button name="Budget" emoji="🎯" />
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings">
          <Button name="Setting" emoji="⚙️" />
        </NavLink>
      </div>
    </nav>
  );
};

export default PageNav;

function Button({ emoji, name }) {
  return (
    <button className="border-2 border-[#e2e8f0] cursor-pointer hover:text-[#4f46e5] transition-colors duration-600 ease-in-out   hover:border-[#4f46e5] rounded-2xl  px-2 py-1">
      {emoji}
      <span className="pl-1">{name}</span>
    </button>
  );
}
