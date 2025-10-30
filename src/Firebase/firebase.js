// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTVmo5ns3voKLbf8W1GawXhmFycAsI4cY",
  authDomain: "financetracker-fb7b7.firebaseapp.com",
  projectId: "financetracker-fb7b7",
  storageBucket: "financetracker-fb7b7.firebasestorage.app",
  messagingSenderId: "734634470276",
  appId: "1:734634470276:web:5d7edd3068507854a1cbd1",
  measurementId: "G-T6F7VVR11C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app , auth , analytics}