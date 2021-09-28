// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCog-9Ev0As1BgMLuxz2ZNFtGXOHJNMFIc",
    authDomain: "sparta-react-basic-27c49.firebaseapp.com",
    projectId: "sparta-react-basic-27c49",
    storageBucket: "sparta-react-basic-27c49.appspot.com",
    messagingSenderId: "162926783138",
    appId: "1:162926783138:web:df113d3bd49ca956a145fb",
    measurementId: "G-WY0M2K3LGD"
  };

initializeApp(firebaseConfig);
// Initialize Firebase

// const app = initializeApp(firebaseConfig);

export const db = getFirestore();