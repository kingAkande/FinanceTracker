import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Pages/Header";

const PageNav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="flex flex-wrap  mx-auto mt-6 justify-center text-sm  font-medium w-[320px] lg:w-[768px]  gap-[14px] p-2 bg">
      {/* <div> 
        <NavLink to="/header">Header</NavLink>
      </div> */}
      {/* <div>
        <NavLink to="/login">Login</NavLink>
      </div> */}
      <div>
        <NavComponent name="Dashboard" linkTo="/dashboard" emoji="🏠" />
      </div>
      <div>
        <NavComponent name="Transaction" linkTo="/transaction" emoji="💳" />
      </div>
      <div>
        <NavComponent name="Report" linkTo="/report" emoji="📊" />
      </div>
      <div>
        <NavComponent name="Budget" linkTo="/budget" emoji="🎯" />
      </div>
      <div>
        <NavComponent name="Setting" linkTo="/settings" emoji="⚙️" />
      </div>
    </nav>
  );
};

export default PageNav;

// function Button({ emoji, name }) {
//   return (
//     <button className="border-2 border-[#e2e8f0] lg:px-4 cursor-pointer hover:text-[#4f46e5] transition-colors duration-600    hover:border-[#4f46e5] rounded-2xl  px-2 py-1">
//       {emoji}
//       <span className="pl-1">{name}</span>
//     </button>
//   );
// }

function NavComponent({ name, emoji, linkTo }) {
  return (
    <NavLink
      to={linkTo}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full border-2 transition-colors ease-in-out duration-600 ${
          isActive
            ? "bg-[#4f46e5] text-white border-[#4f46e5]"
            : " border-[#e2e8f0] hover:border-[#4f46e5]"
        }`
      }
    >
      <span>{emoji}</span> {name}
    </NavLink>
  );
}
