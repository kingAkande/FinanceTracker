import React from "react";
import { Link, NavLink } from "react-router-dom";
import PageNav from "../Components/PageNav";
import Header from "./Header";

const Dashboard = () => {
  return (
    <>
      <div>
        <Header/>
        <PageNav /> 
        <h1>Dashboard</h1>
      </div>
      {/* <NavLink to='/header'> Header</NavLink> */}
    </>
  );
};

export default Dashboard;
