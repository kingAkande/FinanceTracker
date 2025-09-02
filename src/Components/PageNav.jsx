import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Pages/Header";

const PageNav = () => {
  return (
    <nav className="inline-flex gap-6 bg-red-500">
      <div>
        {/* <NavLink to="/header">Header</NavLink> */}
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <div>
        <NavLink to="/transaction">Transaction</NavLink>
      </div>
      <div>
        <NavLink to="/report">Report</NavLink>
      </div>
      <div>
        <NavLink to="/budget">Budget</NavLink>
      </div>
      <div>
        <NavLink to="/settings">Setting</NavLink>
      </div>
    </nav>
  );
};

export default PageNav;
