// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhCaIPpUmzbtZ_nk3lm6IlvJzu62QuLBY",
  authDomain: "disney-plus-85f70.firebaseapp.com",
  projectId: "disney-plus-85f70",
  storageBucket: "disney-plus-85f70.appspot.com",
  messagingSenderId: "285107374407",
  appId: "1:285107374407:web:b235717d3c20f0b1ff6462",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const auth = getAuth();

export default app;
export { auth, db };
