// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTVmo5ns3voKLbf8W1GawXhmFycAsI4cY",
  authDomain: "finance-tracker-kohl-nu.vercel.app",
  projectId: "financetracker-fb7b7",
  storageBucket: "financetracker-fb7b7.firebasestorage.app",
  messagingSenderId: "734634470276",
  appId: "1:734634470276:web:5d7edd3068507854a1cbd1",
  measurementId: "G-T6F7VVR11C"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;