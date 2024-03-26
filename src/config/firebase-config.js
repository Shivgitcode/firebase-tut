// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuHa-r56dfbeLHh-RIqLtg9qvVgjdD3_Y",
  authDomain: "fir-course-a000a.firebaseapp.com",
  projectId: "fir-course-a000a",
  storageBucket: "fir-course-a000a.appspot.com",
  messagingSenderId: "660507652154",
  appId: "1:660507652154:web:57e54b55cd779cfef08503",
  measurementId: "G-5SFQKGWCFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
