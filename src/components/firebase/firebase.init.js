
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDSx5DW9tnLBQfTJXOlIRikERXJ7YpntYc",
  authDomain: "assignment-10-24d86.firebaseapp.com",
  projectId: "assignment-10-24d86",
  storageBucket: "assignment-10-24d86.firebasestorage.app",
  messagingSenderId: "320933958221",
  appId: "1:320933958221:web:15834fe82e733252ec0204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);