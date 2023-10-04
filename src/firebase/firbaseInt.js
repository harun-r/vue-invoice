// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBauryjGxiFG52gQxvD0pm2cqK_7Is16kY",
    authDomain: "vue-invoice-b974b.firebaseapp.com",
    projectId: "vue-invoice-b974b",
    storageBucket: "vue-invoice-b974b.appspot.com",
    messagingSenderId: "788094716418",
    appId: "1:788094716418:web:a6c387b34cc41498bcb51b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
export default db