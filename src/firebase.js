import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyARtQ0bpmi5-x5_cQcHkFBQMwnro8SMxvU",
  authDomain: "hope-admin-dashboard.firebaseapp.com",
  projectId: "hope-admin-dashboard",
  storageBucket: "hope-admin-dashboard.appspot.com",
  messagingSenderId: "204636068451",
  appId: "1:204636068451:web:aeca580887719370f43656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);