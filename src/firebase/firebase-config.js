import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxwymkTT65zOcYBSnqKQm0XrXBy18hSz8",
  authDomain: "journal-room.firebaseapp.com",
  projectId: "journal-room",
  storageBucket: "journal-room.appspot.com",
  messagingSenderId: "214727438291",
  appId: "1:214727438291:web:35444818ae297a68fc8926",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebaseConfig.authDomain.GoogleAuthProvider();

export { db, googleAuthProvider, firebaseConfig };
