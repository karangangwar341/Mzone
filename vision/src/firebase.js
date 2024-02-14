import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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
const auth = getAuth(app);
const database = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);
//auth.setPersistence('local');
export {app, auth, googleProvider, database, storage };


