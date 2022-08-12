
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_px-Z_nN59snkCkSUA0u4ILvfNTBIuBs",
  authDomain: "arternity-1e50d.firebaseapp.com",
  projectId: "arternity-1e50d",
  storageBucket: "arternity-1e50d.appspot.com",
  messagingSenderId: "889920609601",
  appId: "1:889920609601:web:2e8d26544ad745a42e15c0"
};


const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);