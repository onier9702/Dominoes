

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7NbL8FVHhagiMu8gdCmBfUo3kVvVWJ0k",
  authDomain: "dominoes-ea685.firebaseapp.com",
  projectId: "dominoes-ea685",
  storageBucket: "dominoes-ea685.appspot.com",
  messagingSenderId: "32953260518",
  appId: "1:32953260518:web:ca70c5f28f32cef4f55e27",
  measurementId: "G-ZNN8EVCDBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const google = new GoogleAuthProvider();

export {
   
  google,
  auth,
  
  db,

}

