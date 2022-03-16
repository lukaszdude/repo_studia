// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfK-gbvNifIYK_xUJn-MFQuVVGAevxBVo",
  authDomain: "paw-concerts.firebaseapp.com",
  databaseURL: "https://paw-concerts-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "paw-concerts",
  storageBucket: "paw-concerts.appspot.com",
  messagingSenderId: "729814499003",
  appId: "1:729814499003:web:44674b45173bef2b87b39e"
};

// Initialize Firebase
//const db = getFirestore();
const app = initializeApp(firebaseConfig);
console.log("hello world");