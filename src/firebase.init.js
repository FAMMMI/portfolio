// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnKtJLfpfYeXhQRSdntZRXLJlociIPVcs",
    authDomain: "portfolio-de9d4.firebaseapp.com",
    projectId: "portfolio-de9d4",
    storageBucket: "portfolio-de9d4.appspot.com",
    messagingSenderId: "446501597058",
    appId: "1:446501597058:web:2b23c8d30bdb157ab6a99b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;