import firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "./config";

import { getAuth, createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)

const getFile = () => {
   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
   const fileUrl = getDownloadURL(ref(storage, 'DevOps Engineer Resume.pdf'));
 
   fetch(proxyUrl + fileUrl)
     .then((response) => {
       // `response` is the response from the proxy server
       return response.blob();
     })
     .then((blob) => {
       // `blob` is the file content as a Blob object
       const url = URL.createObjectURL(blob);
 
       // Or inserted into an <img> element
       const img = document.getElementById('myimg');
       img.setAttribute('src', url);
     })
     .catch((error) => {
       // Handle any errors
     });
 }

// console.log(app, db, auth)

export { db, auth, getFile };

