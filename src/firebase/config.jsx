// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUkQA3nWnYjIMOzI-MwaTCzjUqGHs8brk",
  authDomain: "satvik-restaurant.firebaseapp.com",
  projectId: "satvik-restaurant",
  storageBucket: "satvik-restaurant.appspot.com",
  messagingSenderId: "418917612104",
  appId: "1:418917612104:web:b2a89b8d908518a10a367d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export all required services
export { db, auth, provider };
