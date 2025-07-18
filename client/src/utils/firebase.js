
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterviewmocker-99db7.firebaseapp.com",
  projectId: "aiinterviewmocker-99db7",
  storageBucket: "aiinterviewmocker-99db7.firebasestorage.app",
  messagingSenderId: "407191051636",
  appId: "1:407191051636:web:0125cad4de79e01b31e021"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}