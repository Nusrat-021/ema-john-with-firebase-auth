// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZmCKnYhCguUsB0WgrqBjdxaLKDSnBcX8",
  authDomain: "ema-john-with-firebase-a-c704d.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-c704d",
  storageBucket: "ema-john-with-firebase-a-c704d.appspot.com",
  messagingSenderId: "1060799768494",
  appId: "1:1060799768494:web:8f8c6ed063f4bc6cd34a3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;