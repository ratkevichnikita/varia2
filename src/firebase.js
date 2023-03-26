import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy7hig92DDtbq06WqOrwhrzF9ewTspKKk",
  authDomain: "b-one-4054b.firebaseapp.com",
  databaseURL: "https://b-one-4054b-default-rtdb.firebaseio.com",
  projectId: "b-one-4054b",
  storageBucket: "b-one-4054b.appspot.com",
  messagingSenderId: "800200217294",
  appId: "1:800200217294:web:43d1ea4e5e4f53ccba769f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);