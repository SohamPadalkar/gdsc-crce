import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAeDbG5CZS2VygRSRYc-cDI43ORYLodJbM",
  authDomain: "gdsc-crce.firebaseapp.com",
  projectId: "gdsc-crce",
  storageBucket: "gdsc-crce.firebasestorage.app",
  messagingSenderId: "223750443315",
  appId: "1:223750443315:web:819e70072025cf5135ae46",
  measurementId: "G-3K7F6B3NV0"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);