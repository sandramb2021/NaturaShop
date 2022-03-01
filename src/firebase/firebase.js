// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0MIZY--UgsIxMch4wpADULffzEJwmLss",
  authDomain: "naturashop-8758b.firebaseapp.com",
  projectId: "naturashop-8758b",
  storageBucket: "naturashop-8758b.appspot.com",
  messagingSenderId: "42097392302",
  appId: "1:42097392302:web:85e99c3d0a3a3ea7da0b3f"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseapp);

