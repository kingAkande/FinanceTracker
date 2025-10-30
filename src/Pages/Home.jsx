// import React from "react";
import PageNav from "../Components/PageNav";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Transaction from "./Transaction";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";


const Home = () => {
  const [remember, setRemember] = useState(false);
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [isSigningIn , setIsSigningIn] = useState(false);
  const [errorMessage , setErrorMessage] = useState("");

  const navigate = useNavigate();

 const onSubmit = async(e)=>{
  e.preventDefault();

  navigate("/dashboard")
 }

  return (
    <div>
    
      {/* Device Section */}
      <div className="bg-white border-6 border-violet-400 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] overflow-hidden w-[350px] md:w-[689px] lg:w-[900px] mx-auto min-h-screen">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="relative text-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10 overflow-hidden">
            <div className="relative z-10">
              <div className="text-[2.5rem] font-bold mb-2">FinanceTracker</div>
              <div className="opacity-90 text-base">
                Take control of your finances
              </div>
            </div>
            <div className="absolute top-[-50%] right-[-50%] w-[200px] h-[200px] bg-white/10 rounded-full animate-[float_6s_ease-in-out_infinite]" />
          </div>

          {/* Login Form */}
          <div className="flex-1 flex flex-col justify-center px-8 py-10">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-1">
                Welcome Back
              </h2>
              <p className="text-slate-500 text-sm">
                Sign in to access your financial dashboard
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email-desktop"
                  className="block mb-2 font-medium text-slate-700 text-sm"
                >
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  id="email-desktop"
                  type="email"
                  placeholder="sulaimon@example.com"
                  required
                  className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-base focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="password-desktop"
                  className="block mb-2 font-medium text-slate-700 text-sm"
                >
                  Password
                </label>
                <input
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  id="password-desktop"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-base focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-center justify-between text-sm mb-5">
                <div
                  className="flex items-center gap-2 cursor-pointer select-none"
                  onClick={() => setRemember(!remember)}
                >
                  <div
                    className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center transition-colors ${
                      remember
                        ? "bg-indigo-600 border-indigo-600 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {remember && "✓"}
                  </div>
                  <label className="cursor-pointer">Remember me</label>
                </div>

                <a
                  href=""
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white rounded-lg py-3 font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                Sign In
              </button>
            </form>

            <div className="flex items-center text-gray-400 my-6 text-sm">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="mx-3">or continue with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <button className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-lg py-3 bg-white font-medium hover:bg-gray-50 transition-all">
                <div className="w-4 h-4 bg-[#ea4335] rounded" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-lg py-3 bg-white font-medium hover:bg-gray-50 transition-all">
                <div className="w-4 h-4 bg-black rounded" />
                Apple
              </button>
            </div>

            <p className="text-center text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link to="signup" className="text-indigo-600 font-semibold hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Float Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}
      </style>

    </div>
  );
};

export default Home;
