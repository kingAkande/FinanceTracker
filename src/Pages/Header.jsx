// import React from "react";

// const Header = () => {
//   return (
//     // <div className=" flex text-white mx-auto items-center justify-between bg-[linear-gradient(135deg,#4f46e5,#7c3aed)] p-6">
//     //   <h1 className="font-bold lg:text-2xl ">💰 FinanceTracker</h1>
//     //   <div className="flex gap-4 items-baseline  font-semibold">
//     //     <h1 className="">Zain Abu</h1>
//     //     <button className="rounded-full p-2  bg-[#8882f8]">ZD</button>
//     //   </div>
//     // </div>
//     <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-5 flex justify-between items-center">
//       <div className="text-xl font-bold flex">💰Finance<span className="hidden md:block">Tracker</span> </div>
//       <div className="flex items-center gap-3">
//         <span className="hidden md:block" >Sulaimon Akande</span>
//         <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//           S A
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import { useAuth } from "../Context/authContext";
// import { doSignOut } from "../Firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await doSignOut();
//       navigate("/");
//     } catch (error) {
//       console.error("Failed to log out", error);
//     }
//   };

//   return (
//     <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">💰 FinanceTracker</h1>
        
//         <div className="flex items-center gap-4">
//           <span className="text-sm">{currentUser?.email}</span>
//           <button
//             onClick={handleLogout}
//             className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import { useAuth } from "../Context/authContext";
// import { doSignOut } from "../Firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await doSignOut();
//       navigate("/");
//     } catch (error) {
//       console.error("Failed to log out", error);
//     }
//   };

//   // ✅ Extract initials (for email/password users)
//   const getInitials = (displayName, email) => {
//     if (displayName) {
//       const parts = displayName.split(" ");
//       return parts.map(p => p[0].toUpperCase()).slice(0, 2).join("");
//     }
//     if (email) return email[0].toUpperCase();
//     return "U";
//   };

//   return (
//     <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-5 flex justify-between items-center">
//       <div className="text-xl font-bold flex">
//         💰Finance<span className="hidden md:block">Tracker</span>
//       </div>

//       {currentUser && (
//         <div className="flex items-center gap-4">
//           {/* ✅ If Google user → show photoURL */}
//           {currentUser.photoURL ? (
//             <img
//               src={currentUser.photoURL}
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-white"
//             />
//           ) : (
//             // ✅ Else show initials
//             <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-semibold">
//               {getInitials(currentUser.displayName, currentUser.email)}
//             </div>
//           )}

//           <button
//             onClick={handleLogout}
//             className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useAuth } from "../Context/authContext";
import { doSignOut } from "../Firebase/auth";
import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await doSignOut();
//       navigate("/");
//     } catch (error) {
//       console.error("Failed to log out", error);
//     }
//   };

//   // Function to get initials (for the avatar)
//   const getInitials = (name) => {
//     if (!name) return "";
//     const parts = name.split(" ");
//     return parts.map((p) => p[0]?.toUpperCase()).join("");
//   };

//   return (
//     <header className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-5 flex justify-between items-center">
//       <div className="text-xl font-bold flex">
//         💰Finance<span className="hidden md:block">Tracker</span>
//       </div>

//       {currentUser && (
//         <div className="flex items-center gap-4">
//           {currentUser.photoURL ? (
//             // ✅ Google user → show photo
//             <img
//               src={currentUser.photoURL}
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-white"
//             />
//           ) : (
//             // ✅ Email/password user → show name + initials
//             <>
//               <span className="hidden md:block">
//                 {currentUser.displayName || "User"}
//               </span>
//               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-semibold">
//                 {getInitials(currentUser.displayName)}
//               </div>
//             </>
//           )}

//           <button
//             onClick={handleLogout}
//             className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </header>
//   );
// };
const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await doSignOut();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const displayName = currentUser?.displayName || "User";
  const photoURL = currentUser?.photoURL;

  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-5 flex justify-between items-center">
      <div className="text-xl font-bold flex">
        💰Finance<span className="hidden md:block">Tracker</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden md:block">{displayName}</span>
        {photoURL ? (
          <img
            src={photoURL}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-sm font-semibold">
            {initials}
          </div>
        )}
        <button
          onClick={handleLogout}
          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
