import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PageNav from "../Components/PageNav";
import Header from "./Header";

const Dashboard = ({ newTRansaction }) => {

  const[txnMSG , setTxnMSG] = useState(" ")

  const transactionMsg = "Recent Transaction"



  return (
    <div >
      <div className="bg-white min-h-screen  rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden mx-auto w-[350px] md:w-[689px] lg:w-[900px] border-6 border-violet-400">
        <Header />
        <PageNav />

        <div>
          <div className=" p-4 md:p-8 min-h-[500px]">
            {/* <!-- Stats Grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 mb-8">
              <MoneyStatus amount="$2,450" message={`Total Balance`} styl= "bg-gradient-to-r from-indigo-600 to-violet-800" />
              <MoneyStatus amount="$1,200" message={`This Month Income`}styl= "bg-gradient-to-r from-green-600 to-green-800"  />
              <MoneyStatus amount="$850" message={`This Month Expenses`} styl= "bg-gradient-to-r from-red-600 to-red-800" />

              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl text-center">
                <div className="text-2xl font-bold mb-1">$350</div>
                <div className="opacity-90">Monthly Savings</div>
              </div>
            </div>

            {/* <!-- Spending Trend Section --> */}
            <div className="bg-white rounded-xl shadow-md mb-8 overflow-hidden">
              <div className="px-8 py-5 border-b border-slate-200 flex justify-between items-center  bg-slate-50">
                <h3 className="md:text-xl font-medium">Spending Trend</h3>
              </div>
              <div className="p-6 md:p-8">
                <div  className="min-h-32  md:h bg-gradient-to-r from-slate-100 to-slate-200 rounded flex items-center justify-center text-slate-500 text-base">
                    <span className="hidden md:block">📈  Line Chart: Last 6 Months Spending</span> <span className="block md:hidden">📈 Mobile Chart</span>
                </div>
              </div>
            </div>

            {/* <!-- Recent Transactions Section --> */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-4 py-3  md:py-5 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                <h3 className="md:text-xl font-medium flex">Recent<span className="hidden md:block">Transaction</span></h3> 
                <a href="" className="text-indigo-600 hover:underline md:text-xl">
                  View All
                </a>
              </div>
              <div className="p-4">
                {/* <!-- Transaction 1 --> */}

                {newTRansaction.map((trx, i) => (
                  <div key={i}>
                    <Recentranction trxObj={trx} />
                  </div>
                ))}

                {/* <!-- Transaction 2 --> */}
                <div className="flex justify-between items-center py-4 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 md:h-10 md:w-10 rounded-full flex items-center justify-center font-bold bg-red-100 text-red-600">
                      -
                    </div>
                    <div>
                      <div className="font-medium ">Groceries</div>
                      <div className="text-slate-500 text-xs md:text-sm">
                        Yesterday • Food & Dining
                      </div>
                    </div>
                  </div>
                  <div className="text-red-600 font-bold text-sm md:text-lg">-$85.50</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

function MoneyStatus({ amount, message , styl }) {
  return (
    <div>
      <div className={`  ${styl} text-white p-6 h-30 rounded-xl text-center`}>
        <div className="text-2xl font-bold mb-1">{amount}</div>
        <div className="opacity-90 font-bold">{message}</div>
      </div>
    </div>
  );
}

export function Recentranction({ trxObj = {}, children }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-slate-100 ">
      <div className="flex items-center gap-4 ">
        <div className="w-8 h-8 md:h-10 md:w-10 rounded-full flex items-center justify-center font-bold bg-green-100 text-green-700">
          +
        </div>
        <div>
          <div className="font-medium">{trxObj.category}</div>
          <div className="text-slate-500 text-xs md:text-sm">
            {trxObj.date} • {trxObj.description}
          </div>
        </div>
      </div>
      <div>
        <div className="text-green-600 text-center font-bold text-sm md:text-lg">
          ${trxObj.amount}
        </div>
        {children}
      </div>
    </div>
  );
}
