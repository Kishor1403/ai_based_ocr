// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDznKNt9LpLDikBEJaszVKCOXAeZFSFFaA",
  authDomain: "ai-based-ocr.firebaseapp.com",
  projectId: "ai-based-ocr",
  storageBucket: "ai-based-ocr.appspot.com",
  messagingSenderId: "727824903791",
  appId: "1:727824903791:web:a533d5b4263c4038ee279a",
  measurementId: "G-D69K7MCT6B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
