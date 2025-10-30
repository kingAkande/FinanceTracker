import React from "react";
import PageNav from "../Components/PageNav";
import Header from "./Header";
import { Link } from "react-router-dom";
import { PlusCircle, Download } from "lucide-react";
import { Recentranction } from "./Dashboard";

const Transaction = ({ newTRansaction , onsetTx  ,onEdit  }) => {

  function removeTx(index){

    onsetTx((newTRansaction)=>newTRansaction.filter((_ ,i)=> index != i    ))
  }
  return (
    <>
      <div>
        <div className="bg-white min-h-screen rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden mx-auto w-[350px] md:w-[689px] lg:w-[900px] border-6 border-violet-400">
          <Header />
          <PageNav />

          <div className="p-4 md:p-8 min-h-[500px]">
            <div className="bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] mb-8 overflow-hidden">
              {/* <!-- Header --> */}
              <div className="grid grid-cols-3 gap-4 px-4 py-4 md:px-8 md:py-5 border-b border-slate-200 md:flex justify-between items-center bg-[#fafbfc]">
                <h3 className="text-sm md:text-lg font-semibold flex"> <span className="hidden md:block">All&nbsp;</span>Transactions</h3>
                <div className="flex gap-2">
                  <button className="text-sm md:text-lg flex gap-2   px-2 py-2 md:px-4  items-center rounded-lg font-medium border border-indigo-600 text-indigo-600 bg-white transition hover:bg-indigo-50">
                    <Download className=" h-4 md:h-6 " />
                    Export <span className="hidden md:block">CSV</span>
                  </button>
                  <Link to="/addTransaction">
                    <button className="text-sm md:text-lg px-2 py-2 md:px-4 md:py-2 items-center flex gap-2 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 transition hover:opacity-90">
                      <PlusCircle className=" h-5 md:h-6 " />
                      Add <span className="hidden md:block">New</span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* <!-- Body --> */}
              <div className="p-4 md:p-8">
                {/* <!-- Filters --> */}
                <div className="grid grid-cols gap-2 md:flex lg:flex-nowrap md:flex-wrap md:gap-4 mb-6">
                  <select className=" px-2 md:px-4 py-2 border border-gray-300 rounded-md bg-white">
                    <option>All Categories </option>
                    <option>Food & Dining</option>
                    <option>Transportation</option>
                    <option>Shopping</option>
                    <option>Bills & Utilities</option>
                  </select>
                  <select className=" px-2 md:px-4 py-2 border border-gray-300 rounded-md bg-white">
                    <option>All Time</option>
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>Last 3 Months</option>
                  </select>
                  <select className="px-2 md:px-4 py-2 border border-gray-300 rounded-md bg-white">
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
                <div className="flex justify-between items-center py-4 border-b border-slate-100  ">
                  <div className="flex items-center gap-4  ">
                    <div className="w-8 h-8 md:h-10 md:w-10  rounded-full flex items-center justify-center font-bold bg-green-100 text-green-700">
                      +
                    </div>
                    <div>
                      <div className="font-medium">Monthly Salary</div>
                      <div className="text-slate-500 text-sm md:text-sm">
                        Jan 15, 2024 • Payroll
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-600 font-bold text-sm md:text-lg">+$2,500.00</div>
                    <div className="text-xs md:text-sm text-slate-500">
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
                      <div className="text-xs md:text-sm text-slate-500">
                        <Link to="/addTransaction" onClick={()=>onEdit(i)} className="text-indigo-600 cursor-pointer">
                          Edit
                        </Link>
                        |
                        <button onClick={()=>removeTx(i)} className="text-red-600 cursor-pointer">
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
                    <div className="w-8 h-8 md:h-10 md:w-10  rounded-full flex items-center justify-center font-bold bg-red-100 text-red-600">
                      -
                    </div>
                    <div>
                      <div className="font-medium">Whole Foods Market</div>
                      <div className="text-slate-500 text-xs md:text-sm">
                        Jan 14, 2024 • Food & Dining
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-600 text-center font-bold text-sm md:text-lg ">-$85.50</div>
                    <div className="text-xs md:text-sm text-slate-500">
                      <button className="text-indigo-600 cursor-pointer">
                        Edit
                      </button>{" "}
                      |
                      <button  className="text-red-600 cursor-pointer">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Transaction Item (Expense) --> */}
                <div className="flex justify-between items-center py-4 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 md:h-10 md:w-10  rounded-full flex items-center justify-center font-bold bg-red-100 text-red-600">
                      -
                    </div>
                    <div>
                      <div className="font-medium">Netflix Subscription</div>
                      <div className="text-slate-500 text-xs md:text-sm ">
                        Jan 13, 2024 • Entertainment
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-600 text-center font-bold text-sm md:text-lg">-$15.99</div>
                    <div className="text-xs md:text-sm text-slate-500">
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
