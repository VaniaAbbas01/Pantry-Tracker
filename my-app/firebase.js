// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_qkg-mPG7B6W3C4UEJpX1aOeC1AS9qJQ",
  authDomain: "inventory-management-1aadf.firebaseapp.com",
  projectId: "inventory-management-1aadf",
  storageBucket: "inventory-management-1aadf.appspot.com",
  messagingSenderId: "48588380754",
  appId: "1:48588380754:web:03ce69e7c227c4870add8b",
  measurementId: "G-HB8G222T7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {firestore};