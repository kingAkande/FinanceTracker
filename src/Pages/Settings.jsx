import React from "react";
import PageNav from "../Components/PageNav";
import Header from "./Header";
const Settings = () => {
  return (
    <div>
      <div className="bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden mx-auto w-[350px] md:w-[689px] lg:w-[900px] border-6 border-violet-400">
        <Header />
        <PageNav />
        <div class="flex-1 p-6 bg-gray-50">
          {/* <!-- Appearance --> */}
          <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div class="mb-4 border-b  border-slate-200 pb-2">
              <h3 class="text-lg font-semibold text-gray-800">Appearance</h3>
            </div>
            <div class="space-y-6">
              {/* <!-- Dark Mode --> */}
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-800">Dark Mode</div>
                  <div class="text-sm text-gray-500">
                    Switch between light and dark themes
                  </div>
                </div>
                <div class="w-12 h-6 flex items-center p-1 rounded-full bg-gray-300">
                  <div class="w-4 h-4 bg-white rounded-full shadow transform translate-x-6"></div>

                </div>
              </div>
              {/* <!-- Currency --> */}
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-800">Currency</div>
                  <div class="text-sm text-gray-500">
                    Choose your preferred currency
                  </div>
                </div>
                <select class="px-3 py-2 border border-gray-300  bg-slate-100  rounded-md text-sm">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                  <option>JPY (¥)</option>
                </select>
              </div>
              {/* <!-- Language --> */}
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-800">Language</div>
                  <div class="text-sm text-gray-500">
                    Select your preferred language
                  </div>
                </div>
                <select class="px-3 py-2 border border-gray-300  bg-slate-100  rounded-md text-sm">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </div>

          {/* <!-- Notifications --> */}
          <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div class="mb-4 border-b  border-slate-200 pb-2">
              <h3 class="text-lg font-semibold text-gray-800">Notifications</h3>
            </div>
            <div class="space-y-6">
              {/* <!-- Budget Alerts --> */}
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-800">Budget Alerts</div>
                  <div class="text-sm text-gray-500">
                    Get notified when approaching budget limits
                  </div>
                </div>
                <div class="w-12 h-6 flex items-center rounded-full bg-indigo-600 p-1 cursor-pointer">
                  <div class="w-4 h-4 bg-white rounded-full shadow transform translate-x-6"></div>
                </div>
              </div>

              {/* <!-- Monthly Reports --> */}
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-800">Monthly Reports</div>
                  <div class="text-sm text-gray-500">
                    Receive monthly spending summaries
                  </div>
                </div>
                <div class="w-12 h-6 flex items-center rounded-full bg-indigo-600 p-1 cursor-pointer">
                  <div class="w-4 h-4 bg-white rounded-full shadow transform translate-x-6"></div>
                </div>
              </div>

              {/* <!-- Transaction Reminders --> */}
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-800">
                    Transaction Reminders
                  </div>
                  <div class="text-sm text-gray-500">
                    Remind to log recurring transactions
                  </div>
                </div>
                <div class="w-12 h-6 flex items-center rounded-full bg-gray-300 p-1 cursor-pointer">
                  <div class="w-4 h-4 bg-white rounded-full shadow"></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Data Management --> */}
          <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div class="mb-4 border-b  border-slate-200 pb-2">
              <h3 class="text-lg font-semibold text-gray-800">
                Data Management
              </h3>
            </div>
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-800">Export Data</div>
                  <div class="text-sm text-gray-500">
                    Download your financial data as CSV or JSON
                  </div>
                </div>
                <div class="flex gap-2">
                  <button class="px-4 py-2 bg-gray-100 rounded-md border text-sm border-indigo-600  text-indigo-600 bg-white transition hover:bg-indigo-50">
                    Export CSV
                  </button>
                  <button class="px-4 py-2 bg-gray-100 rounded-md border text-sm border-indigo-600 text-indigo-600 bg-white transition hover:bg-indigo-50">
                    Export JSON
                  </button>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-800">Import Data</div>
                  <div class="text-sm text-gray-500">
                    Upload financial data from CSV file
                  </div>
                </div>
                <button class="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
                  Import CSV
                </button>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-800">Clear All Data</div>
                  <div class="text-sm text-red-600">
                    ⚠️ This will permanently delete all your data
                  </div>
                </div>
                <button class="px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700">
                  Clear Data
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Account --> */}
          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="mb-4  border-slate-200 border-b pb-2">
              <h3 class="text-lg font-semibold text-gray-800">Account</h3>
            </div>
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-800">
                    Profile Information
                  </div>
                  <div class="text-sm text-gray-500">
                    Update your name and email
                  </div>
                </div>
                <button class="px-4 py-2 bg-gray-100 rounded-md  border text-sm border-indigo-600  text-indigo-600 bg-white transition hover:bg-indigo-50">
                  Edit Profile
                </button>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-medium text-gray-800 ">Change Password</div>
                  <div class="text-sm text-gray-500">
                    Update your account password
                  </div>
                </div>
                <button class="px-4 py-2 bg-gray-100 rounded-md  border text-sm border-indigo-600  text-indigo-600 bg-white transition hover:bg-indigo-50">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
