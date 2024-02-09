// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from"firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_CbLub_rnqN6k3X5JuEmyo-miQXIieZA",
  authDomain: "dddlearnfi.firebaseapp.com",
  projectId: "dddlearnfi",
  storageBucket: "dddlearnfi.appspot.com",
  messagingSenderId: "408497416459",
  appId: "1:408497416459:web:f757fe8facef764ce31a0e",
  measurementId: "G-TG2L3PYSPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();