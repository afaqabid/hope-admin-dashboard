import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC3Bphr92rI554kCbXDh-5NzysOltMLbNc",
  authDomain: "hope-makeliveseasier.firebaseapp.com",
  databaseURL: "https://hope-makeliveseasier-default-rtdb.firebaseio.com",
  projectId: "hope-makeliveseasier",
  storageBucket: "hope-makeliveseasier.appspot.com",
  messagingSenderId: "593452194882",
  appId: "1:593452194882:web:9299f61c48b034bb3ca1db",
  measurementId: "G-4236BSR8TL"
};

const app = initializeApp(firebaseConfig);
