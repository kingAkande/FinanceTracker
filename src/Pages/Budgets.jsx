import React from "react";
import PageNav from "../Components/PageNav";
import Header from "./Header";
import { PlusCircle, Download } from "lucide-react";

const Budgets = () => {
  return (
    <div>
      <div className="bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden mx-auto w-[350px] md:w-[689px] lg:w-[900px] border-6 border-violet-400">
        <Header />
        <PageNav />
        <div class="p-6 space-y-8">
          {/* <!-- Stats Grid --> */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow text-center">
              <div class="text-2xl font-bold">$2,000</div>
              <div class="font-bold">Total Budget</div>
            </div>
            <div class="p-6 rounded-xl shadow text-center text-white bg-gradient-to-br from-emerald-600 to-emerald-800">
              <div class="text-2xl font-bold">$1,150</div>
              <div class="font-bold">Spent</div>
            </div>
            <div class="p-6 rounded-xl shadow text-center text-white bg-gradient-to-br from-red-600 to-red-800">
              <div class="text-2xl font-bold">$850</div>
              <div class="font-bold">Remaining</div>
            </div>
          </div>

          {/* <!-- Budget Section --> */}
          <div class="bg-white p-6 rounded-xl shadow">
            <div class="flex justify-between items-center border-b pb-2 mb-4">
              <h3 class="text-lg font-semibold">Budget Category</h3>
              {/* <button class="bg-indigo-600 flex gap-2 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                <PlusCircle />
                Add Category
              </button> */}
                         <button className="text-sm md:text-lg px-2 py-2 md:px-4 md:py-2 items-center flex gap-2 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 transition hover:opacity-90">
                                    <PlusCircle className=" h-5 md:h-6 " />
                                    Add <span className="hidden md:block">Category</span>
                                  </button>
            </div>
            <div class="space-y-6">
              {/* <!-- Food & Dining --> */}Add
              <div class="flex justify-between items-start">
                <div class="flex-1 pr-4">
                  <h4 class="font-medium">🍕 Food & Dining</h4>
                  <div class="text-slate-500 text-sm">$450 of $500 spent</div>
                  <div class="h-3 w-full bg-slate-200 rounded-full mt-2 overflow-hidden">
                    <div class="h-3 w-[90%] bg-gradient-to-r from-amber-500 to-amber-700 rounded-full"></div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-lg font-bold text-amber-500">90%</div>
                  <div class="text-xs text-slate-500">⚠️ Near limit</div>
                </div>
              </div>

              {/* <!-- Transportation --> */}
              <div class="flex justify-between items-start">
                <div class="flex-1 pr-4">
                  <h4 class="font-medium">🚗 Transportation</h4>
                  <div class="text-slate-500 text-sm">$180 of $300 spent</div>
                  <div class="h-3 w-full bg-slate-200 rounded-full mt-2 overflow-hidden">
                    <div class="h-3 w-[60%] bg-indigo-600 rounded-full"></div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-lg font-bold text-indigo-600">60%</div>
                  <div class="text-xs text-slate-500">✅ On track</div>
                </div>
              </div>

              {/* <!-- Bills & Utilities --> */}
              <div class="flex justify-between items-start">
                <div class="flex-1 pr-4">
                  <h4 class="font-medium">🏠 Bills & Utilities</h4>
                  <div class="text-slate-500 text-sm">$320 of $400 spent</div>
                  <div class="h-3 w-full bg-slate-200 rounded-full mt-2 overflow-hidden">
                    <div class="h-3 w-[80%] bg-indigo-600 rounded-full"></div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-lg font-bold text-indigo-600">80%</div>
                  <div class="text-xs text-slate-500">✅ Good</div>
                </div>
              </div>

              {/* <!-- Entertainment --> */}
              {/* <div class="flex justify-between items-start">
                <div class="flex-1 pr-4">
                  <h4 class="font-medium">🎬 Entertainment</h4>
                  <div class="text-slate-500 text-sm">$200 of $150 spent</div>
                  <div class="h-3 w-full bg-slate-200 rounded-full mt-2 overflow-hidden">
                    <div class="h-3 w-full bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-lg font-bold text-red-600">133%</div>
                  <div class="text-xs text-red-600">🚨 Over budget</div>
                </div>
              </div> */}
            </div>
          </div>

          {/* <!-- Budget Alerts --> */}
          <div class="bg-white p-6 rounded-xl shadow">
            <div class="border-b pb-2 mb-4">
              <h3 class="text-lg font-semibold">Budget Alerts</h3>
            </div>
            <div class="space-y-4">
              <div class="bg-red-100 border border-red-200 rounded-lg p-4">
                <div class="text-red-600 font-medium">🚨 Over Budget Alert</div>
                <div class="text-red-900 text-sm">
                  Entertainment spending is 133% of your budget limit.
                </div>
              </div>
              <div class="bg-amber-100 border border-amber-200 rounded-lg p-4">
                <div class="text-amber-600 font-medium">
                  ⚠️ Near Limit Warning
                </div>
                <div class="text-amber-900 text-sm">
                  Food & Dining is at 90% of your budget. $50 remaining.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budgets;
