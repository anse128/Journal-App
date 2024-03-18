// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0EQBUkjDPqbVT2enf98bP4tg0EkaNJZg",
  authDomain: "react-cursos-cb4b0.firebaseapp.com",
  projectId: "react-cursos-cb4b0",
  storageBucket: "react-cursos-cb4b0.appspot.com",
  messagingSenderId: "83314289046",
  appId: "1:83314289046:web:1d9a5501c36d9591f995b7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp) 
export const FirebaseDB = getFirestore (FirebaseApp) 

