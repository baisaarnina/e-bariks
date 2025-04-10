// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBt_YeDqHcHo25Ybj8LbbqcFb2ZDQo7_j4",
  authDomain: "e-bariks.firebaseapp.com",
  projectId: "e-bariks",
  storageBucket: "e-bariks.firebasestorage.app",
  messagingSenderId: "64799756450",
  appId: "1:64799756450:web:71a3845dbd4627beda07fb",
  measurementId: "G-E0M93TTGHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: use analytics only in browser (not SSR or Node.js)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Export services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, analytics };

