// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpSCmUNQRzAxAZoEYXC_aJ5skAsL51DxI",
  authDomain: "orbital-login-page-c4f7e.firebaseapp.com",
  databaseURL: "https://orbital-login-page-c4f7e-default-rtdb.firebaseio.com",
  projectId: "orbital-login-page-c4f7e",
  storageBucket: "orbital-login-page-c4f7e.appspot.com",
  messagingSenderId: "334598785508",
  appId: "1:334598785508:web:008de9bae78809679adff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = "Welcome " + username + "!"