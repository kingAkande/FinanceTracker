
import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import googleLogo from "./../assets/google-icon-logo-svgrepo-com.svg";

// ❌ WRONG: You were using create user function for sign in
// import { doCreateUserWithEmailAndPassword } from '../Firebase/auth'
// ✅ CORRECT: Import the sign-in function
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../Firebase/auth";

const Home = () => {
  const navigate = useNavigate();

  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ❌ WRONG: These are not needed for login page
  // const [confirmPassword, setconfirmPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false); // ✅ Better naming
  const [isgoogleSignIn , setIsGoogleSignIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  // ✅ CORRECT: Sign in function (not create user)
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);
      setErrorMessage(""); // Clear previous errors

      try {
        // ✅ Use sign-in function, not create user
        await doSignInWithEmailAndPassword(email, password);
        //  navigate("/dashboard");
      } catch (error) {
        // ✅ Handle errors properly
        setErrorMessage(error.message || "Failed to sign in");
        setIsSigningIn(false);
      }
    }
  };

  // ✅ CORRECT: Google sign in with proper error handling
  const onisGoogleSignIn = async (e) => {
    e.preventDefault();

    if (!isgoogleSignIn) {
      setIsGoogleSignIn(true);
      setErrorMessage("");

      try {
        await doSignInWithGoogle();
        navigate("/dashboard");
      } catch (error) {
        setErrorMessage(error.message || "Failed to sign in with Google");
        setIsGoogleSignIn(false);
      }
    }
  };

  return (
    <div>
      {/* ✅ CORRECT: Redirect if already logged in */}
      {userLoggedIn && <Navigate to={"/dashboard"} replace={true} />}

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

            {/* ✅ ADDED: Error message display */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                {errorMessage}
              </div>
            )}

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
                  onChange={(e) => setEmail(e.target.value)}
                  id="email-desktop"
                  type="email"
                  placeholder="Email"
                  required
                  disabled={isSigningIn} // ✅ Disable during sign in
                  className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-base focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                  onChange={(e) => setPassword(e.target.value)}
                  id="password-desktop"
                  type="password"
                  placeholder="Enter your password"
                  disabled={isSigningIn}
                  className="w-full border-2 border-slate-200 rounded-lg px-4 py-3 text-base focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
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

                <Link
                  to="/forgot-password"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSigningIn} // ✅ Disable during sign in
                className="w-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white rounded-lg py-3 font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {/* ✅ Show loading state */}
                {isSigningIn ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="flex items-center text-gray-400 my-6 text-sm">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="mx-3">or continue with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 gap-3 mb-6">
              {/* ✅ FIXED: Connect Google button to handler */}
              <button
                onClick={onisGoogleSignIn}
                disabled={isgoogleSignIn}
                className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-lg py-3 bg-white font-medium hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <img src={googleLogo} alt="Google Logo" className="w-6 h-6" />
                {isgoogleSignIn ? "Signing In..." : "Google"}
              </button>
            </div>

            <p className="text-center text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 font-semibold hover:underline"
              >
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