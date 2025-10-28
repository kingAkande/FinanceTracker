import React from "react";
import PageNav from "../Components/PageNav";
import Header from "./Header";
import { PlusCircle, Download } from "lucide-react";


const Reports = () => {
  return (
    <div>
      {/* `grid gap-6 ${deviceType === 'desktop' ? 'grid-cols-2' : 'grid-cols-1'}` */}

      
      <div className="bg-white  rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden mx-auto w-[350px] md:w-[689px] lg:w-[900px] border-6 border-violet-400">
        <Header />
        <PageNav />
        <div class=" p-4 md:p-6 space-y-6">
          {/* <!-- Filter Bar --> */}
          <div class="flex justify-between items-center mb-6">
            <select class="border border-slate-300 rounded-lg lg:h-12 px-4 py-2 text-slate-700">
              <option>This Year</option>
              <option>Last Year</option>
              <option>Last 6 Months</option>
              <option>Custom Range</option>
            </select>
            <button class="flex text-sm md:text-lg gap-2 px-2 md:px-5 py-2 rounded-lg font-medium  items-center border border-indigo-600 text-indigo-600 bg-white transition hover:bg-indigo-50 ">
              <Download className="h-4 md:h-6" />
              Export Report
            </button>
          </div>

          {/* <!-- Two Column Section --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* <!-- Monthly Income vs Expenses --> */}
            <div class="bg-white p-6 rounded-xl shadow">
              <div class="border-b border-slate-200 pb-2 mb-4">
                <h3 class="text-lg font-semibold">
                  Monthly Income vs Expenses
                </h3>
              </div>
              <div class="text-center py-12 bg-slate-100 rounded-lg">
                📊 Bar Chart: Monthly Comparison
              </div>
              <div class="flex justify-between mt-4 text-sm text-slate-600">
                <span>
                   Income: <strong class="text-emerald-600">$2,400</strong>
                </span>
                <span>
                   Expenses: <strong class="text-red-600">$1,850</strong>
                </span>
              </div>
            </div>

            {/* <!-- Spending by Category --> */}
            <div class="bg-white p-6 rounded-xl shadow">
              <div class="border-b border-slate-200 pb-2 mb-4">
                <h3 class="text-lg font-semibold">Spending by Category</h3>
              </div>
              <div class="text-center py-12 bg-slate-100 rounded-lg">
                🥧 Pie Chart: Category Breakdown
              </div>
              <div class="mt-4 space-y-2">
                <div class="flex justify-between text-sm">
                  <span>🍕 Food & Dining</span>
                  <strong>$450 (35%)</strong>
                </div>
                <div class="flex justify-between text-sm">
                  <span>🚗 Transportation</span>
                  <strong>$280 (22%)</strong>
                </div>
                <div class="flex justify-between text-sm">
                  <span>🏠 Bills & Utilities</span>
                  <strong>$320 (25%)</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Spending Trends --> */}
        <div class="bg-white p-6 rounded-xl shadow">
          <div class="border-b border-slate-200 pb-2 mb-4">
            <h3 class="text-lg font-semibold">Spending Trends</h3>
          </div>
          <div class="text-center py-12 bg-slate-100 rounded-lg">
            📈 Line Chart: 12-Month Spending Trend
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div class="text-center p-4 bg-slate-50 rounded-lg">
              <div class="text-2xl font-bold text-emerald-600">$550</div>
              <div class="text-sm text-slate-600">Highest Month</div>
            </div>
            <div class="text-center p-4 bg-slate-50 rounded-lg">
              <div class="text-2xl font-bold text-red-600">$1,200</div>
              <div class="text-sm text-slate-600">Lowest Month</div>
            </div>
            <div class="text-center p-4 bg-slate-50 rounded-lg">
              <div class="text-2xl font-bold text-indigo-600">$1,850</div>
              <div class="text-sm text-slate-600">Average</div>
            </div>
            <div class="text-center p-4 bg-slate-50 rounded-lg">
              <div class="text-2xl font-bold text-emerald-600">↗ 12%</div>
              <div class="text-sm text-slate-600">Growth</div>
            </div>
          </div>
        </div>
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
