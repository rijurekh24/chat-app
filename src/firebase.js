import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC5-8KpTx12kW28GBeM7SAVnrwHLBUf0Y8",
  authDomain: "chat-ecf67.firebaseapp.com",
  projectId: "chat-ecf67",
  storageBucket: "chat-ecf67.appspot.com",
  messagingSenderId: "331624241766",
  appId: "1:331624241766:web:7a31a2428c675445956ba7"
};




export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();