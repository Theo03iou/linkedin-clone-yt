// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVXODepZrNw5Kkt71F3J2hfJkhDv8HMpg",
  authDomain: "linkedin-clone-e1375.firebaseapp.com",
  projectId: "linkedin-clone-e1375",
  storageBucket: "linkedin-clone-e1375.appspot.com",
  messagingSenderId: "734632214855",
  appId: "1:734632214855:web:727d451b95b7cc6946cc62",
  measurementId: "G-CKC0S8JY9G",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };