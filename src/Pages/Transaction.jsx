import React from "react";
import PageNav from "../Components/PageNav";
import Header from "./Header";
import { Link } from "react-router-dom";
import { PlusCircle, Download } from "lucide-react";
import { Recentranction } from "./Dashboard";

const Transaction = ({ newTRansaction }) => {
  return (
    <>
      <div>
        <div className="bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden mx-auto max-w-[900px] border-8 border-slate-800">
          <Header />
          <PageNav />

          <div className="p-8 min-h-[500px]">
            <div className="bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] mb-8 overflow-hidden">
              {/* <!-- Header --> */}
              <div className="px-8 py-5 border-b border-slate-200 flex justify-between items-center bg-[#fafbfc]">
                <h3 className="text-lg font-semibold">All Transactions</h3>
                <div className="flex gap-2">
                  <button className="flex gap-2 px-6 py-3 rounded-lg font-medium border border-indigo-600 text-indigo-600 bg-white transition hover:bg-indigo-50">
                    <Download />
                    Export CSV
                  </button>
                  <Link to="/addTransaction">
                    <button className="px-6 py-3 flex gap-2 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 transition hover:opacity-90">
                      <PlusCircle />
                      Add New
                    </button>
                  </Link>
                </div>
              </div>

              {/* <!-- Body --> */}
              <div className="p-8">
                {/* <!-- Filters --> */}
                <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap gap-4 mb-6">
                  <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
                    <option>All Categories</option>
                    <option>Food & Dining</option>
                    <option>Transportation</option>
                    <option>Shopping</option>
                    <option>Bills & Utilities</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
                    <option>All Time</option>
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>Last 3 Months</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
                    <option>All Types</option>
                    <option>Income Only</option>
                    <option>Expenses Only</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className="px-4 py-2 border border-gray-300 rounded-md bg-white min-w-[200px]"
                  />
                </div>

                {/* <!-- Transaction Item (Income) --> */}
                <div className="flex justify-between items-center py-4 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-green-100 text-green-700">
                      +
                    </div>
                    <div>
                      <div className="font-medium">Monthly Salary</div>
                      <div className="text-slate-500 text-sm">
                        Jan 15, 2024 • Payroll
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-600 font-bold">+$2,500.00</div>
                    <div className="text-xs text-slate-500">
                      <button className="text-indigo-600 cursor-pointer">
                        Edit
                      </button>{" "}
                      |
                      <button className="text-red-600 cursor-pointer">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                {newTRansaction.map((trx, i) => (
                  <div key={i}>
                    <Recentranction trxObj={trx}>
                      {" "}
                      <div className="text-xs text-slate-500">
                        <button className="text-indigo-600 cursor-pointer">
                          Edit
                        </button>{" "}
                        |
                        <button className="text-red-600 cursor-pointer">
                          Delete
                        </button>
                      </div>
                    </Recentranction>
                  </div>
                ))}

                {/* <Recentranction
                  category={`Salary`}
                  date={`Today`}
                  description={`Payroll`}
                  ammount={`+$2,500`}
                >
                  {" "}
                  <div className="text-xs text-slate-500">
                    <button className="text-indigo-600 cursor-pointer">
                      Edit
                    </button>{" "}
                    |
                    <button className="text-red-600 cursor-pointer">
                      Delete
                    </button>
                  </div>
                </Recentranction> */}

                {/* <!-- Transaction Item (Expense) --> */}
                <div className="flex justify-between items-center py-4 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-red-100 text-red-600">
                      -
                    </div>
                    <div>
                      <div className="font-medium">Whole Foods Market</div>
                      <div className="text-slate-500 text-sm">
                        Jan 14, 2024 • Food & Dining
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-600 font-bold">-$85.50</div>
                    <div className="text-xs text-slate-500">
                      <button className="text-indigo-600 cursor-pointer">
                        Edit
                      </button>{" "}
                      |
                      <button className="text-red-600 cursor-pointer">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Transaction Item (Expense) --> */}
                <div className="flex justify-between items-center py-4 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-red-100 text-red-600">
                      -
                    </div>
                    <div>
                      <div className="font-medium">Netflix Subscription</div>
                      <div className="text-slate-500 text-sm">
                        Jan 13, 2024 • Entertainment
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-600 font-bold">-$15.99</div>
                    <div className="text-xs text-slate-500">
                      <button className="text-indigo-600 cursor-pointer">
                        Edit
                      </button>{" "}
                      |
                      <button className="text-red-600 cursor-pointer">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Load More --> */}
                <div className="text-center py-6 text-slate-500">
                  <button className="px-6 py-3 rounded-lg font-medium border border-indigo-600 text-indigo-600 bg-white transition hover:bg-indigo-50">
                    Load More Transactions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
