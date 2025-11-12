// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { doPasswordReset } from "../Firebase/auth"; // <-- you already have this

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  //   const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email) return setError("Please enter your email");

    setIsSending(true);
    setError("");
    setMessage("");

    try {
      await doPasswordReset(email);
      setMessage("Check your inbox for the password-reset link.");
    } catch (err) {
      // Firebase error codes → friendly messages
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else {
        setError("Failed to send reset email. Try again later.");
      }
    } finally {
      setIsSending(false);
      setEmail("")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4 bg-violet-600">
      <div className="bg-white rounded-2xl shadow-xl border border-violet-200 p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Reset Password
        </h2>
        <p className="text-slate-600 mb-6">
          Enter your email and we’ll send you a link to reset your password.
        </p>

        {message && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 text-sm">
            {message}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit}>
          <div className="mb-5">
            <label className="block mb-2 font-medium text-slate-700 text-sm">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSending}
              className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 disabled:bg-slate-100"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-semibold rounded-lg py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50"
          >
            {isSending ? "Sending…" : "Send Reset Link"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
        
          <Link
            to="/"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
