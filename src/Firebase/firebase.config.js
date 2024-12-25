// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAQNQTFZLTcAlOiJzPe482sJfERJY6YlQ",
  authDomain: "flavor-tales.firebaseapp.com",
  projectId: "flavor-tales",
  storageBucket: "flavor-tales.firebasestorage.app",
  messagingSenderId: "1050152279806",
  appId: "1:1050152279806:web:8483a1c8295e2cdb624faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;