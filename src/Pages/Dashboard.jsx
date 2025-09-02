import React from "react";
import { Link, NavLink } from "react-router-dom";
import PageNav from "../Components/PageNav";

const Dashboard = () => {
  return (
    <>
      <div>
    
        <PageNav /> <h1>Dashboard</h1>
      </div>
      {/* <NavLink to='/header'> Header</NavLink> */}
    </>
  );
};

export default Dashboard;
