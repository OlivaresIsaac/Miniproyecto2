import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDr2etgzDji2g3ypWr2MexvtIBejzrdiso",
  authDomain: "miniproyecto2-1a4a7.firebaseapp.com",
  projectId: "miniproyecto2-1a4a7",
  storageBucket: "miniproyecto2-1a4a7.appspot.com",
  messagingSenderId: "155281615291",
  appId: "1:155281615291:web:ae6b5d9d012175fff67c9e",
  measurementId: "G-QT6MKZRWMV"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account"})
