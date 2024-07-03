// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5WFZv5mFMw2Z0OTuIVQ4Nj3GLX2oYgF8",
  authDomain: "test-e0f85.firebaseapp.com",
  projectId: "test-e0f85",
  storageBucket: "test-e0f85.appspot.com",
  messagingSenderId: "636749914224",
  appId: "1:636749914224:web:c697d06c8da9d6365d54b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
