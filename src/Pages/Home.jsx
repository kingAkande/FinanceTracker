import React from "react";
import PageNav from "../Components/PageNav";
import Header from "./Header";

const Home = () => {
  return (
    <div className="border  mx-auto ">
      <Header/>
    <PageNav/>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
