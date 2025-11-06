// import React, { useContext, useState, useEffect } from "react";
// import { auth } from "../../Firebase/firebase";
// import { GoogleAuthProvider } from "firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [userLoggedIn, setUserLoggedIn] = useState(false);
//   const [isEmailUser, setIsEmailUser] = useState(false);
//   const [isGoogleUser, setIsGoogleUser] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, initializeUser);
//     return unsubscribe;
//   }, []);

//   async function initializeUser(user) {
//     if (user) {

//       setCurrentUser({ ...user });

//       // check if provider is email and password login
//       const isEmail = user.providerData.some(
//         (provider) => provider.providerId === "password"
//       );
//       setIsEmailUser(isEmail);

//       // check if the auth provider is google or not
//     //   const isGoogle = user.providerData.some(
//     //     (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
//     //   );
//     //   setIsGoogleUser(isGoogle);

//       setUserLoggedIn(true);
//     } else {
//       setCurrentUser(null);
//       setUserLoggedIn(false);
//     }

//     setLoading(false);
//   }

//   const value = {
//     userLoggedIn,
//     isEmailUser,
//     isGoogleUser,
//     currentUser,
//     setCurrentUser
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// import React, { useContext, useState, useEffect } from "react";
// import { auth } from "../../Firebase/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// // Create the Auth Context
// const AuthContext = React.createContext();

// // Hook to use auth context
// export function useAuth() {
//   return useContext(AuthContext);
// }

// // Auth Provider Component
// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [userLoggedIn, setUserLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Listen for auth state changes
//     const unsubscribe = onAuthStateChanged(auth, initializeUser);
//     return unsubscribe; // Cleanup subscription
//   }, []);

//   async function initializeUser(user) {
//     if (user) {
//       // User is signed in
//       setCurrentUser({ ...user });
//       setUserLoggedIn(true);
//     } else {
//       // User is signed out
//       setCurrentUser(null);
//       setUserLoggedIn(false);
//     }
//     setLoading(false);
//   }

//   const value = {
//     currentUser,
//     userLoggedIn,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }


// import React, { useContext, useState, useEffect } from "react";
// import { auth } from "../../Firebase/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// // Create the Auth Context
// const AuthContext = React.createContext();

// // ✅ Export hook separately (this fixes the Fast Refresh warning)
// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// // ✅ Auth Provider Component
// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [userLoggedIn, setUserLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Listen for auth state changes
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         // ✅ Reload user to get fresh profile data
//         try {
//           await user.reload();
//           const refreshedUser = auth.currentUser;
          
//           setCurrentUser({
//             uid: refreshedUser.uid,
//             email: refreshedUser.email,
//             displayName: refreshedUser.displayName,
//             photoURL: refreshedUser.photoURL,
//           });
//           setUserLoggedIn(true);
//         } catch (error) {
//           console.error("Error reloading user:", error);
//           setCurrentUser(user);
//           setUserLoggedIn(true);
//         }
//       } else {
//         setCurrentUser(null);
//         setUserLoggedIn(false);
//       }
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     userLoggedIn,
//     loading,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// authContext.jsx  (add the refreshUser function)

import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // NEW – manual refresh that forces a fresh user object
  // const refreshUser = async () => {
  //   const auth = getAuth();
  //   const user = forcedUser ?? auth.currentUser;
  //   if (auth.currentUser) {
  //     await auth.currentUser.reload();               // reload from Firebase
  //     setCurrentUser({ ...auth.currentUser });       // spread to trigger re-render
  //   }
  //   if (user) {
  //   // Force a fresh copy → React re-renders instantly
  //   setCurrentUser({ ...user });
  // }
  // };
  const refreshUser = async (userOverride = null) => {
  const auth = getAuth();
  const user = userOverride ?? auth.currentUser;

  if (user) {
    // Ensure we have the latest data
    if (!userOverride) await user.reload();
    setCurrentUser({ ...user });   // triggers instant re-render
  }
};

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userLoggedIn: !!currentUser,
    loading,
    refreshUser,          // ← expose it
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};