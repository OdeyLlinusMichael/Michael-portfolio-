// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4-bWd-X0lOm3ABIjkkzH4p31XsYY2O68",
  authDomain: "my-portfolio-c5eb9.firebaseapp.com",
  projectId: "my-portfolio-c5eb9",
  storageBucket: "my-portfolio-c5eb9.appspot.com",
  messagingSenderId: "379831129140",
  appId: "1:379831129140:web:1800c334f474f60be46661",
  measurementId: "G-B5VXSLMP78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);