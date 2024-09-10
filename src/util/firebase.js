// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA617Gq3IbWASpQ5ggUxbuhzYeXMDeTeqI",
  authDomain: "netflix-clone-using-reac-8b6e1.firebaseapp.com",
  projectId: "netflix-clone-using-reac-8b6e1",
  storageBucket: "netflix-clone-using-reac-8b6e1.appspot.com",
  messagingSenderId: "462248690637",
  appId: "1:462248690637:web:58eac12868e6f2171a3a84",
  measurementId: "G-Y3QWXMLV1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);