// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBX3OMOQdwvPtorpBhdt6v-NGe81mIBTjg",
  authDomain: "menudaciba-7dabc.firebaseapp.com",
  projectId: "menudaciba-7dabc",
  storageBucket: "menudaciba-7dabc.appspot.com",
  messagingSenderId: "280192237555",
  appId: "1:280192237555:web:71bc6a2957409effab9c86",
  measurementId: "G-80WXD2ZHVV"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;
export const db = getFirestore(app)

