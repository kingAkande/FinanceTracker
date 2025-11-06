// import React, { useState } from "react";
// import { Link, useNavigate, Navigate } from "react-router-dom";
// import { useAuth } from "../Context/authContext";
// import {
//   doCreateUserWithEmailAndPassword,
//   doSignInWithGoogle,
// } from "../Firebase/auth";
// import { updateProfile } from "firebase/auth";
// import { auth } from "../Firebase/firebase";
// import googleLogo from "./../assets/google-icon-logo-svgrepo-com.svg";

// const SignUp = () => {
//   const navigate = useNavigate();

//   // ✅ Form state
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   // const [agreeToTerms, setAgreeToTerms] = useState(false);

//   // ✅ UI state
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const { userLoggedIn } = useAuth();

//   // ✅ Calculate password strength
//   const getPasswordStrength = () => {
//     if (!password) return { width: "0%", color: "bg-slate-200" };

//     let strength = 0;
//     if (password.length >= 8) strength++;
//     if (/[A-Z]/.test(password)) strength++;
//     if (/[0-9]/.test(password)) strength++;
//     if (/[^A-Za-z0-9]/.test(password)) strength++;

//     const widths = ["33%", "50%", "75%", "100%"];
//     const colors = [
//       "bg-red-500",
//       "bg-orange-500",
//       "bg-yellow-500",
//       "bg-green-500",
//     ];

//     return {
//       width: widths[strength - 1] || "0%",
//       color: colors[strength - 1] || "bg-red-500",
//     };
//   };

//   const passwordStrength = getPasswordStrength();

//   // ✅ Handle form submission
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     // ✅ Validation
//     if (!firstName.trim() || !lastName.trim()) {
//       setErrorMessage("Please enter your full name");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match");
//       return;
//     }

//     if (password.length < 6) {
//       setErrorMessage("Password should be at least 6 characters");
//       return;
//     }

//     // if (!agreeToTerms) {
//     //   setErrorMessage(
//     //     "Please agree to the Terms of Service and Privacy Policy"
//     //   );
//     //   return;
//     // }

//     if (!isRegistering) {
//       setIsRegistering(true);

//       try {
//         // ✅ Create user account with Firebase
//         // await doCreateUserWithEmailAndPassword(email, password);

//         const userCredential = await doCreateUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;
//   // ✅ Update Firebase Auth profile with full name
//   await updateProfile(user, {
//     displayName: `${firstName} ${lastName}`,
//   });
//         navigate("/dashboard");
//       } catch (error) {
//         // ✅ Handle specific Firebase errors
//         let message = "Failed to create account";
//         if (error.code === "auth/email-already-in-use") {
//           message = "Email is already registered";
//         } else if (error.code === "auth/invalid-email") {
//           message = "Invalid email address";
//         } else if (error.code === "auth/weak-password") {
//           message = "Password is too weak";
//         }

//         setErrorMessage(message);
//         setIsRegistering(false);
//       }
//     }
//   };

//   // ✅ Handle Google Sign In
//   const onGoogleSignIn = async (e) => {
//     e.preventDefault();

//     if (!isRegistering) {
//       setIsRegistering(true);
//       setErrorMessage("");

//       try {
//         await doSignInWithGoogle();
//         navigate("/dashboard");
//       } catch (error) {
//         setErrorMessage(error.message || "Failed to sign in with Google");
//         setIsRegistering(false);
//       }
//     }
//   };

//   return (
//     <div className="">
//       {/* ✅ Redirect if already logged in */}
//       {userLoggedIn && <Navigate to={"/dashboard"} replace={true} />}

//       <div className="bg-white border-violet-400 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] border-[8px] overflow-hidden mx-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] w-[350px] md:w-[689px] lg:w-[900px] min-h-screen">
//         <div className="flex flex-col h-full">
//           {/* Header */}
//           <div className="relative bg-gradient-to-br from-indigo-600 to-violet-600 text-white text-center p-10 overflow-hidden">
//             <div className="relative z-10">
//               <div className="text-4xl mb-2">💰 FinanceTracker</div>
//               <div className="opacity-90 text-base">
//                 Start your financial journey today
//               </div>
//             </div>
//             <div className="absolute top-[-50%] right-[-50%] w-[200px] h-[200px] bg-white/10 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
//           </div>

//           {/* Form */}
//           <div className="flex-1 flex flex-col justify-center p-10">
//             <div className="text-center mb-8">
//               <h2 className="text-slate-800 font-bold text-xl mb-1">
//                 Create Account
//               </h2>
//               <p className="text-slate-500 text-sm">
//                 Join thousands managing their finances smarter
//               </p>
//             </div>

//             {/* ✅ Error message display */}
//             {errorMessage && (
//               <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg mb-5 text-sm">
//                 {errorMessage}
//               </div>
//             )}

//             <form onSubmit={onSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
//                 <div>
//                   <label className="block mb-2 font-medium text-slate-700 text-sm">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     required
//                     disabled={isRegistering}
//                     className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-2 font-medium text-slate-700 text-sm">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     required
//                     disabled={isRegistering}
//                     className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
//                   />
//                 </div>
//               </div>

//               <div className="mb-5">
//                 <label className="block mb-2 font-medium text-slate-700 text-sm">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   disabled={isRegistering}
//                   className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
//                 />
//               </div>

//               <div className="mb-5">
//                 <label className="block mb-2 font-medium text-slate-700 text-sm">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Create a strong password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   disabled={isRegistering}
//                   className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
//                 />
//                 {/* ✅ Dynamic password strength indicator */}
//                 <div className="mt-2 h-1 bg-slate-200 rounded">
//                   <div
//                     className={`h-full ${passwordStrength.color} rounded transition-all duration-300`}
//                     style={{ width: passwordStrength.width }}
//                   ></div>
//                 </div>
//               </div>

//               <div className="mb-5">
//                 <label className="block mb-2 font-medium text-slate-700 text-sm">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Re-enter your password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                   disabled={isRegistering}
//                   className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
//                 />
//               </div>

//               {/* ✅ Terms checkbox with state */}
//               {/* <div className="flex items-start gap-3 mb-6">
//                 <div
//                   onClick={() =>
//                     !isRegistering && setAgreeToTerms(!agreeToTerms)
//                   }
//                   className={`w-4 h-4 border-2 rounded cursor-pointer flex items-center justify-center transition-colors ${
//                     agreeToTerms
//                       ? "bg-indigo-600 border-indigo-600 text-white"
//                       : "border-slate-300"
//                   } ${isRegistering ? "cursor-not-allowed opacity-50" : ""}`}
//                 >
//                   {agreeToTerms && "✓"}
//                 </div>
//                 <p className="text-slate-500 text-sm leading-snug">
//                   I agree to the{" "}
//                   <a
//                     href="#"
//                     className="text-indigo-600 font-medium hover:underline"
//                   >
//                     Terms of Service
//                   </a>{" "}
//                   and{" "}
//                   <a
//                     href="#"
//                     className="text-indigo-600 font-medium hover:underline"
//                   >
//                     Privacy Policy
//                   </a>
//                 </p>
//               </div> */}

//               <button
//                 type="submit"
//                 disabled={isRegistering}
//                 className="w-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-semibold rounded-lg py-3 text-base transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(79,70,229,0.3)] active:translate-y-0 mb-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//               >
//                 {isRegistering ? "Creating Account..." : "Create Account"}
//               </button>
//             </form>

//             <div className="flex items-center my-5 text-slate-400 text-sm">
//               <div className="flex-1 h-px bg-slate-200"></div>
//               <span className="mx-3">or sign up with</span>
//               <div className="flex-1 h-px bg-slate-200"></div>
//             </div>

//             <div className="grid grid-cols-1 gap-3 mb-6">
//               <button
//                 onClick={onGoogleSignIn}
//                 disabled={isRegistering}
//                 className="flex items-center justify-center gap-2 border-2 border-slate-200 rounded-lg bg-white text-slate-700 font-medium py-3 transition-all hover:bg-slate-50 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//               >
//                 <img src={googleLogo} alt="Google Logo" className="w-6 h-6" />

//                 <span>{isRegistering ? "Signing Up..." : "Google"}</span>
//               </button>
//             </div>

//             <div className="text-center text-slate-500 text-sm">
//               Already have an account?{" "}
//               <Link
//                 to="/"
//                 className="text-indigo-600 font-semibold hover:underline"
//               >
//                 Sign in
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Float Animation */}
//       <style>
//         {`
//           @keyframes float {
//             0%, 100% { transform: translateY(0px) rotate(0deg); }
//             50% { transform: translateY(-20px) rotate(180deg); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle,
} from "../Firebase/auth";
import { updateProfile,  getAuth } from "firebase/auth";
// ❌ WRONG: Don't import auth here, it's already in your auth.js
// import { auth } from "../Firebase/firebase";
import googleLogo from "./../assets/google-icon-logo-svgrepo-com.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const { refreshUser } = useAuth(); // ← NEW – we’ll add this in authContext
  // ✅ Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ✅ UI state
  const [isRegistering, setIsRegistering] = useState(false);
  const [isgoogleSignIn, setIsGoogleSignIn] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  // ✅ Calculate password strength
  const getPasswordStrength = () => {
    if (!password) return { width: "0%", color: "bg-slate-200" };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const widths = ["33%", "50%", "75%", "100%"];
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-green-500",
    ];

    return {
      width: widths[strength - 1] || "0%",
      color: colors[strength - 1] || "bg-red-500",
    };
  };

  const passwordStrength = getPasswordStrength();

  // ✅ Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // ✅ Validation
    if (!firstName.trim() || !lastName.trim()) {
      setErrorMessage("Please enter your full name");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters");
      return;
    }

    if (!isRegistering) {
      setIsRegistering(true);

      try {
        // ✅ CORRECT: Call without auth parameter (it's already in the function)
        const userCredential = await doCreateUserWithEmailAndPassword(
          email,
          password
        );

        // ✅ Update Firebase Auth profile with full name
        await updateProfile(userCredential.user, {
          displayName: `${firstName} ${lastName}`,
        });

        // ✅ CRITICAL: Reload user to get updated profile
        // await userCredential.user.reload();
        const auth = getAuth();
        await refreshUser?.(auth.currentUser);

        // ✅ CRITICAL: Force sign out and back in to refresh context
        // await auth.signOut();
        // await doSignInWithEmailAndPassword(email, password);

        // ---- NEW: tell the context to refresh the user object ----
        // await refreshUser?.();
        const freshUser = userCredential.user;
        await refreshUser?.(freshUser); 

        // // ✅ Small delay to ensure context updates
        // setTimeout(() => {
        //   navigate("/dashboard");
        // }, 500);

        // ✅ Force context to refresh user data
        navigate("/dashboard");
      } catch (error) {
        // ✅ Handle specific Firebase errors
        let message = "Failed to create account";
        if (error.code === "auth/email-already-in-use") {
          message = "Email is already registered";
        } else if (error.code === "auth/invalid-email") {
          message = "Invalid email address";
        } else if (error.code === "auth/weak-password") {
          message = "Password is too weak";
        }

        setErrorMessage(message);
        setIsRegistering(false);
      }
    }
  };

  // ✅ Handle Google Sign In
  const onGoogleSignIn = async (e) => {
    e.preventDefault();

    if (!isgoogleSignIn) {
      setIsRegistering(true);
      setErrorMessage("");

      try {
        await doSignInWithGoogle();
        await refreshUser?.(getAuth().currentUser);
        navigate("/dashboard");
      } catch (error) {
        setErrorMessage(error.message || "Failed to sign in with Google");
        setIsGoogleSignIn(false);
      }
    }
  };

  return (
    <div className="">
      {/* ✅ Redirect if already logged in */}
      {userLoggedIn && <Navigate to={"/dashboard"} replace={true} />}

      <div className="bg-white border-violet-400 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.25)] border-[8px] overflow-hidden mx-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] w-[350px] md:w-[689px] lg:w-[900px] min-h-screen">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-indigo-600 to-violet-600 text-white text-center p-10 overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl mb-2">💰 FinanceTracker</div>
              <div className="opacity-90 text-base">
                Start your financial journey today
              </div>
            </div>
            <div className="absolute top-[-50%] right-[-50%] w-[200px] h-[200px] bg-white/10 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
          </div>

          {/* Form */}
          <div className="flex-1 flex flex-col justify-center p-10">
            <div className="text-center mb-8">
              <h2 className="text-slate-800 font-bold text-xl mb-1">
                Create Account
              </h2>
              <p className="text-slate-500 text-sm">
                Join thousands managing their finances smarter
              </p>
            </div>

            {/* ✅ Error message display */}
            {errorMessage && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg mb-5 text-sm">
                {errorMessage}
              </div>
            )}

            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block mb-2 font-medium text-slate-700 text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    disabled={isRegistering}
                    className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium text-slate-700 text-sm">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    disabled={isRegistering}
                    className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-medium text-slate-700 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isRegistering}
                  className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-medium text-slate-700 text-sm">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isRegistering}
                  className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
                />
                {/* ✅ Dynamic password strength indicator */}
                <div className="mt-2 h-1 bg-slate-200 rounded">
                  <div
                    className={`h-full ${passwordStrength.color} rounded transition-all duration-300`}
                    style={{ width: passwordStrength.width }}
                  ></div>
                </div>
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-medium text-slate-700 text-sm">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isRegistering}
                  className="w-full border-2 border-slate-200 rounded-lg py-3 px-4 transition-all focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                disabled={isRegistering}
                className="w-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-semibold rounded-lg py-3 text-base transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(79,70,229,0.3)] active:translate-y-0 mb-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isRegistering ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="flex items-center my-5 text-slate-400 text-sm">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="mx-3">or sign up with</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            <div className="grid grid-cols-1 gap-3 mb-6">
              <button
                onClick={onGoogleSignIn}
                disabled={isgoogleSignIn}
                className="flex items-center justify-center gap-2 border-2 border-slate-200 rounded-lg bg-white text-slate-700 font-medium py-3 transition-all hover:bg-slate-50 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <img src={googleLogo} alt="Google Logo" className="w-6 h-6" />
                <span>{isgoogleSignIn ? "Signing Up..." : "Google"}</span>
              </button>
            </div>

            <div className="text-center text-slate-500 text-sm">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign in
              </Link>
            </div>
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

export default SignUp;
