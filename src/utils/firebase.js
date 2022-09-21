// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOJ-TgWXb_2gxnbQ1dBvK2_lFa3RK3AqU",
    authDomain: "coderhouse-snkrs.firebaseapp.com",
    projectId: "coderhouse-snkrs",
    storageBucket: "coderhouse-snkrs.appspot.com",
    messagingSenderId: "635258674611",
    appId: "1:635258674611:web:cb2f5cae879e1e55443fc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);