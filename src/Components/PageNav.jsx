import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Pages/Header";

const PageNav = () => {
  return (
    <nav className="inline-flex gap-6 bg-red-500">
      <div>
        <NavLink to="/header">Header</NavLink>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default PageNav;
