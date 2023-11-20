import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";

/** firebase configuration object containing keys and identifiers */
const firebaseConfig = {
  apiKey: "AIzaSyA0UsAGr9xbRXAE28HDSUhjgNS1yA54NBA",
  authDomain: "the-cryptobase-project.firebaseapp.com",
  projectId: "the-cryptobase-project",
  storageBucket: "the-cryptobase-project.appspot.com",
  messagingSenderId: "203730541363",
  appId: "1:203730541363:web:1fca99671552c782323c46",
  measurementId: "G-YFCYRM355B",
};

/** initialize firebase */
const app = initializeApp(firebaseConfig);

/** initialize firebase services */
const auth = getAuth(app);
const db = getFirestore(app);

/** export services */
export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  db,
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where,
};
