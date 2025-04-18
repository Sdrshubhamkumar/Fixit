// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDGtWr-O51Pe8mRe0Xhz5beW9Un4eJDfcU",
    authDomain: "fixit-4f336.firebaseapp.com",
    projectId: "fixit-4f336",
    storageBucket: "fixit-4f336.firebasestorage.app",
    messagingSenderId: "1022280898940",
    appId: "1:1022280898940:web:42e00b7a413341ca736cf9",
    measurementId: "G-9PE58QTDS7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
