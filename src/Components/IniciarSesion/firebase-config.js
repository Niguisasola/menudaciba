// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyBIKhxk8rTEI876jlG-xa133W5YvuaTFWM",
  authDomain: "menuda-ciba.firebaseapp.com",
  projectId: "menuda-ciba",
  storageBucket: "menuda-ciba.appspot.com",
  messagingSenderId: "641909532183",
  appId: "1:641909532183:web:5c85bcad1b8620bc925e52",
  measurementId: "G-J2T98D20MQ"
};

const authentication = initializeApp(firebaseConfig);

export const auth = getAuth(authentication)