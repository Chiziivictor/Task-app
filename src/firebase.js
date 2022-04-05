// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCclq10Os-YPxbuTJ4E5uo1fm_GbGMKXn0",
  authDomain: "task-af18b.firebaseapp.com",
  projectId: "task-af18b",
  storageBucket: "task-af18b.appspot.com",
  messagingSenderId: "880617160855",
  appId: "1:880617160855:web:030bdde6c1784bcadc69d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
