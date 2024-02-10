// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import{getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBccm2avhrkuADy7ca_gl1eAxatqdSkxKI",
    authDomain: "mzone-129f3.firebaseapp.com",
    projectId: "mzone-129f3",
    storageBucket: "mzone-129f3.appspot.com",
    messagingSenderId: "1015066851635",
    appId: "1:1015066851635:web:88a32a9597738624e7e646",
    measurementId: "G-DHV15NZQYN"
};

const app = initializeApp(firebaseConfig);
export const database  = getFirestore(app);
const auth = getAuth();
//auth.setPersistence('local');
export  {app , auth};