import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIvjLMOIz-lrg1_PUIWeDZ6z7RpFrNnW4",
  authDomain: "betterchatgpt-9bf31.firebaseapp.com",
  projectId: "betterchatgpt-9bf31",
  storageBucket: "betterchatgpt-9bf31.appspot.com",
  messagingSenderId: "904341169615",
  appId: "1:904341169615:web:4addc9a4f8cffbd86a5eba",
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
