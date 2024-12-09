
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Wcq0aZNuFaRfkd0gZJ8Qz5RYGg0eNP0",
  authDomain: "auth-with-context-8aed9.firebaseapp.com",
  projectId: "auth-with-context-8aed9",
  storageBucket: "auth-with-context-8aed9.firebasestorage.app",
  messagingSenderId: "73284065129",
  appId: "1:73284065129:web:acf4509aec3d14558d4ff8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }