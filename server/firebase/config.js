import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAJULsjOs3XGd98aD_rEKAyibgLHCRAW38",
  authDomain: "inventory-management-sys-3d960.firebaseapp.com",
  projectId: "inventory-management-sys-3d960",
  storageBucket: "inventory-management-sys-3d960.firebasestorage.app",
  messagingSenderId: "965796964920",
  appId: "1:965796964920:web:a64e87b58ad7a5666654cd",
  measurementId: "G-NWXJ9730YL",
  databaseURL: "https://inventory-management-sys-3d960-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db, firebaseConfig };
