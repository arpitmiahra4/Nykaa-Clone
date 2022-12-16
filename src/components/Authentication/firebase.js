// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDPqBnM9g4zbWm7o37ur7Z-3U-1gPCO55s",
  authDomain: "nyka-clone.firebaseapp.com",
  projectId: "nyka-clone",
  storageBucket: "nyka-clone.appspot.com",
  messagingSenderId: "599053668129",
  appId: "1:599053668129:web:ee5249409f756d0227f860",
  measurementId: "G-0V6CEN6KP2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
export default firebaseAuth;
