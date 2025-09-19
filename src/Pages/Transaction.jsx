import React from "react";
import PageNav from "../Components/PageNav";
import Header from "./Header";

const Transaction = () => {
  return (
    <>
      {/* <div classNameName="mx-auto w-[320px] lg:w-[768px] mt-10">
        <div classNameName="mt-4  bg-[#d8c7c7] rounded-xl w-[320px] lg:w-[768px] ">
          <div className=" flex justify-between p-6 bg-amber-200  rounded-t-xl">
            <div className=" text-2xl font-bold">Recent Transaction </div>
            <div> View All</div>
          </div>
          <hr className="text-white" />
          <div className="flex gap-4">
            <select className="border border-[#e2e8f0] rounded" name="" id="">
              <option value="">ALl Category</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <select className="border border-[#e2e8f0] rounded" name="" id="">
              <option value="">All Time</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <select className="border border-[#e2e8f0]  rounded" name="" id="">
              <option value="">All Types</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <input type="text" placeholder="Search Transaction" />
          </div>
        </div>
      </div> */}
      {/* <div>
        <div class="device-mockup">
          <div class="main-content">
            <div class="section-card">
              <div class="section-header">
                <h3>All Transactions</h3>
                <div style="display: flex; gap: 10px;">
                  <button class="btn btn-secondary">Export CSV</button>
                  <button class="btn btn-primary">Add New</button>
                </div>
              </div>
              <div class="section-body">
                <div class="filter-bar">
                  <select class="filter-item">
                    <option>All Categories</option>
                    <option>Food & Dining</option>
                    <option>Transportation</option>
                    <option>Shopping</option>
                    <option>Bills & Utilities</option>
                  </select>
                  <select class="filter-item">
                    <option>All Time</option>
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>Last 3 Months</option>
                  </select>
                  <select class="filter-item">
                    <option>All Types</option>
                    <option>Income Only</option>
                    <option>Expenses Only</option>
                  </select>
                  <input
                    type="text"
                    class="filter-item"
                    placeholder="Search transactions..."
                    style="min-width: 200px;"
                  />
                </div>
                <div class="transaction-item">
                  <div class="transaction-info">
                    <div class="transaction-icon income">+</div>
                    <div>
                      <div style="font-weight: 500;">Monthly Salary</div>
                      <div style="color: #64748b; font-size: 0.9rem;">
                        Jan 15, 2024 • Payroll
                      </div>
                    </div>
                  </div>
                  <div style="text-align: right;">
                    <div class="amount-positive">+$2,500.00</div>
                    <div style="font-size: 0.8rem; color: #64748b;">
                      <button style="background: none; border: none; color: #4f46e5; cursor: pointer;">
                        Edit
                      </button>{" "}
                      |
                      <button style="background: none; border: none; color: #dc2626; cursor: pointer;">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div class="transaction-item">
                  <div class="transaction-info">
                    <div class="transaction-icon expense">-</div>
                    <div>
                      <div style="font-weight: 500;">Whole Foods Market</div>
                      <div style="color: #64748b; font-size: 0.9rem;">
                        Jan 14, 2024 • Food & Dining
                      </div>
                    </div>
                  </div>
                  <div style="text-align: right;">
                    <div class="amount-negative">-$85.50</div>
                    <div style="font-size: 0.8rem; color: #64748b;">
                      <button style="background: none; border: none; color: #4f46e5; cursor: pointer;">
                        Edit
                      </button>{" "}
                      |
                      <button style="background: none; border: none; color: #dc2626; cursor: pointer;">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div class="transaction-item">
                  <div class="transaction-info">
                    <div class="transaction-icon expense">-</div>
                    <div>
                      <div style="font-weight: 500;">Netflix Subscription</div>
                      <div style="color: #64748b; font-size: 0.9rem;">
                        Jan 13, 2024 • Entertainment
                      </div>
                    </div>
                  </div>
                  <div style="text-align: right;">
                    <div class="amount-negative">-$15.99</div>
                    <div style="font-size: 0.8rem; color: #64748b;">
                      <button style="background: none; border: none; color: #4f46e5; cursor: pointer;">
                        Edit
                      </button>{" "}
                      |
                      <button style="background: none; border: none; color: #dc2626; cursor: pointer;">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div style="text-align: center; padding: 20px; color: #64748b;">
                  <button class="btn btn-secondary">
                    Load More Transactions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
                  <button className="px-6 py-3 rounded-lg font-medium border border-indigo-600 text-indigo-600 bg-white transition hover:bg-indigo-50">
                    Export CSV
                  </button>
                  <button className="px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 transition hover:opacity-90">
                    Add New
                  </button>
                </div>
              </div>

              {/* <!-- Body --> */}
              <div className="p-8">
                {/* <!-- Filters --> */}
                <div className="flex flex-wrap gap-4 mb-6">
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
