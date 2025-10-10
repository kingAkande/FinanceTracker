import React from "react";
import PageNav from "../Components/PageNav";
import Header from "./Header";
import { useState } from "react";
import { Check } from "lucide-react";

const AddTransaction = ({
  setAmount,
  setDiscription,
  setCategory,
  setNotes,
  setTransactions,
  setDate,
  amount,
  description,
  category,
  notes,
  date,
}) => {
  const [transactionState, setTransactionState] = useState("");
  // const [amount , setAmount] = useState("");
  // const [description , setDiscription ] = useState("");
  // const[category , setCategory ]= useState("");
  // const[notes , setNotes]= useState("");
  // const[transactions , setTransactions] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newTX = {
      amount: amount,
      description: description,
      category: category,
      notes: notes,
      date:date,
    };

    setTransactions((prevTx) => [...prevTx, newTX]);
  }

  return (
    <div>
      <div className="bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden mx-auto max-w-[900px] border-8 border-slate-800">
        <Header />
        <PageNav />
        <div class="p-8 min-h-[500px]">
          <div class="bg-white rounded-xl shadow-md mb-8 overflow-hidden">
            {/* <!-- Section Header --> */}
            <div class="flex items-center justify-between border-b border-slate-200 px-6 py-5 bg-[#fafbfc]">
              <h3 class="font-semibold text-lg"> Add New Transaction</h3>
              <button class="text-gray-500 hover:text-gray-700">✕</button>
            </div>

            {/* <!-- Section Body --> */}
            <div class="p-8">
              <form class="space-y-6" onSubmit={handleSubmit}>
                {/* <!-- Income / Expense Radios --> */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <label class="flex items-center gap-3 p-4 border-2 border-indigo-600 rounded-lg bg-sky-50 cursor-pointer">
                    <input type="radio" name="type" value="income" />
                    <span class="text-emerald-600 font-medium">💰 Income</span>
                  </label>
                  <label class="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer">
                    <input type="radio" name="type" value="expense" />
                    <span class="text-red-600 font-medium">💸 Expense</span>
                  </label>
                </div>

                {/* <!-- Amount --> */}
                <div>
                  <label class="block mb-2 font-medium text-gray-700">
                    Amount *
                  </label>
                  <div class="relative">
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="0.00"
                      step="0.01"
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      class="w-full pl-9 pr-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                    />
                  </div>
                </div>

                {/* <!-- Description --> */}
                <div>
                  <label class="block mb-2 font-medium text-gray-700">
                    Description *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Salary, Groceries, Gas..."
                    required
                    value={description}
                    onChange={(e) => setDiscription(e.target.value)}
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                  />
                </div>

                {/* <!-- Category & Date --> */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label class="block mb-2 font-medium text-gray-700">
                      Category *
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                    >
                      <option value="">Select category</option>
                      <option value="salary">💼 Salary</option>
                      <option value="freelance">💻 Freelance</option>
                      <option value="investment">📈 Investment</option>
                      <option value="food">🍕 Food & Dining</option>
                      <option value="transport">🚗 Transportation</option>
                      <option value="shopping">🛍️ Shopping</option>
                      <option value="bills">🏠 Bills & Utilities</option>
                      <option value="entertainment">🎬 Entertainment</option>
                      <option value="health">⚕️ Healthcare</option>
                      <option value="other">📝 Other</option>
                    </select>
                  </div>
                  <div>
                    <label class="block mb-2 font-medium text-gray-700">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e)=>setDate(e.target.value)}
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                    />
                  </div>
                </div>

                {/* <!-- Notes --> */}
                <div>
                  <label class="block mb-2 font-medium text-gray-700">
                    Notes (Optional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows="3"
                    placeholder="Additional details about this transaction..."
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10"
                  ></textarea>
                </div>

                {/* <!-- Buttons --> */}
                <div class="flex gap-4 pt-4">
                  <button
                    type="submit"
                    class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium shadow hover:opacity-90 transition"
                  >
                    Save Transaction
                  </button>
                  <button
                    type="button"
                    class="bg-white text-indigo-600 border border-indigo-600 py-3 px-6 rounded-lg font-medium hover:bg-indigo-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
