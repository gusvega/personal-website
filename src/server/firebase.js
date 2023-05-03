import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "./config";

import { getAuth, createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app)

console.log(app, db, auth)

export { db, auth };

