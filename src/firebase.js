// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM4PNeql3cjxnT1-tIRltga6HUqVbFRJE",
  authDomain: "ddd-edu.firebaseapp.com",
  projectId: "ddd-edu",
  storageBucket: "ddd-edu.appspot.com",
  messagingSenderId: "775796617672",
  appId: "1:775796617672:web:31ead16feef1c5157250fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
