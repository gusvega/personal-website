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
   getDownloadURL(ref(storage, 'DevOps Engineer Resume.pdf'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

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

