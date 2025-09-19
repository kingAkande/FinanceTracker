import React from "react";
import PageNav from "../Components/PageNav";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Transaction from "./Transaction";

const Home = () => {
  return (
    <div className="  mx-auto ">
      <Header />
      <PageNav />
    </div>
  );
};

export default Home;
