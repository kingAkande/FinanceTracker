import React from "react";
import PageNav from "../Components/PageNav";
import Header from "./Header";

const Reports = () => {
  return (
    <div>
      <Header/>
      <PageNav /> 
        <div className="flex w-[40px] mx-auto">
        <h1>Reports</h1>
      </div>
    </div>
  );
};

export default Reports;


/**
 * 
 * 
 *     <>
      <Header />
      <PageNav />
      <div className="flex w-[40px] mx-auto">
        <h1>Transaction</h1>
      </div>
    </>
 */