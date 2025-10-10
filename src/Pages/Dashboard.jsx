import React from "react";
import { Link, NavLink } from "react-router-dom";
import PageNav from "../Components/PageNav";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-white min-h-screen  rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden mx-auto max-w-[900px] border-8 border-slate-800">
        <Header />
        <PageNav />

        <div>
          <div className="p-8 min-h-[500px]">
            {/* <!-- Stats Grid --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              <MoneyStatus amount="$2,450" message={`Total Balance`} />
              <MoneyStatus amount="$1,200" message={`This Month Income`} />
              <MoneyStatus amount="$850" message={`This Month Expenses`} />

              <div className="bg-gradient-to-r from-indigo-400 to-violet-500 text-white p-6 rounded-xl text-center">
                <div className="text-2xl font-bold mb-1">$350</div>
                <div className="opacity-90">Monthly Savings</div>
              </div>
            </div>

            {/* <!-- Spending Trend Section --> */}
            <div className="bg-white rounded-xl shadow-md mb-8 overflow-hidden">
              <div className="px-8 py-5 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                <h3 className="text-lg font-medium">Spending Trend</h3>
              </div>
              <div className="p-8">
                <div className="h-52 bg-gradient-to-r from-slate-100 to-slate-200 rounded flex items-center justify-center text-slate-500 text-base">
                  📈 Line Chart: Last 6 Months Spending
                </div>
              </div>
            </div>

            {/* <!-- Recent Transactions Section --> */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-8 py-5 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                <h3 className="text-lg font-medium">Recent Transactions</h3>
                <a href="#" className="text-indigo-600 hover:underline">
                  View All
                </a>
              </div>
              <div className="p-8">
                {/* <!-- Transaction 1 --> */}
         
                <Recentranction category={`Salary`} date={`Today`} description={`Payroll`} amount={`+$2,500`}/>
                {/* <!-- Transaction 2 --> */}
                <div className="flex justify-between items-center py-4 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-red-100 text-red-600">
                      -
                    </div>
                    <div>
                      <div className="font-medium">Groceries</div>
                      <div className="text-slate-500 text-sm">
                        Yesterday • Food & Dining
                      </div>
                    </div>
                  </div>
                  <div className="text-red-600 font-bold">-$85.50</div>
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

function MoneyStatus({ amount, message }) {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-400 to-violet-500 text-white p-6 rounded-xl text-center">
        <div className="text-2xl font-bold mb-1">{amount}</div>
        <div className="opacity-90">{message}</div>
      </div>
    </div>
  );
}

export function Recentranction({ trxObj, children }) {
  return (
    // <div>
    //   <div className="flex justify-between py-10 px-6">
    //     <div className=" flex ">
    //       <button className="rounded-full bg-sky-500 mr-4 px-4 py-2 ">+</button>
    //       <div>
    //         <h1>{category}</h1>
    //         <p>
    //           {date} &bull;{description}{" "}
    //         </p>
    //       </div>
    //     </div>
    //     <div>
    //       <h1>{amount}</h1>
    //       {children}
    //     </div>
    //   </div>
    //   <hr className="mx-6 text-white" />
    // </div>

    <div className="flex justify-between items-center py-4 border-b border-slate-100">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-green-100 text-green-700">
          +
        </div>
        <div>
          <div className="font-medium">{trxObj.category}</div>
          <div className="text-slate-500 text-sm">
            {trxObj.date} • {trxObj.description}
          </div>
        </div>
      </div>
      <div>
        <div className="text-green-600 text-center font-bold">{trxObj.amount}</div>
        {children}
      </div>
    </div>
  );
}
