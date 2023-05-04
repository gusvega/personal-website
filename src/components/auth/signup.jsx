import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { AppContext } from '../AppContext';
import { db, auth } from '../../server/firebase.js';

// Firebase

import { getAuth, createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ---- Cookies
// import jwt from 'jsonwebtoken';
import jwt from 'jwt-decode'
import Cookies from 'universal-cookie';
import jsonwebtoken from 'jsonwebtoken';
// ---- Cookies

function SignUp() {


  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  let [userInfo, setUserInfo] = useState({
    firstName: 'GUSTAVO',
    lastName: '',
    email: '',
    UID: '',
    admin: false,
    analyses: {}
  })


  const [error, setError] = useState(null)

  let decodedToken = ''
  // // // --- Cookies
  const cookies = new Cookies()

  const handleSignUpCookie = (token) => {
    decodedToken = jwt(token)

    // console.log('Decoded Token', decodedToken)

    cookies.set('user_cookie', token, {
      expires: new Date(decodedToken.exp * 1000)
    })
  }



  const addDocument = async () => {
    const usersCollectionRef = collection(db, "users");
    // console.log(decodedToken.user_id)

    try {
      const documentRef = doc(usersCollectionRef, decodedToken.user_id);
      await setDoc(documentRef, userInfo);
      // console.log("Document written with ID: ", documentRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const register = async (e) => {
    e.preventDefault()


    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const userRes = res.user;
        // // console.log('RES: ', userRes)
        userRes.getIdToken().then((token) => {
          // // console.log(token);
          // createCookie(token)

          handleSignUpCookie(token)
          addDocument()

        });

        setData({
          ...data,                                // spreading the unchanged values
          email: email,          // changing the state of *changed value*
        })


        goToRoot()



      })
      .catch(err => {
        // console.log(err.code)
        if (err.code === 'auth/email-already-in-use') {
          // console.log('Email already in use')
          setError('Email already in use')
        }
      })
  }


  return (

    <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-black">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">

        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center text-white pb-12 md:pb-20">
          <h1 className="h1">Welcome.</h1>
          <h1 className="h1">I exist to make Real Estate easier.</h1>

        </div>

        <div className="max-w-sm mx-auto">
          <br></br>
          <form>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
                <input id="first-name" type="text" onChange={() => setUserInfo({
                  ...userInfo,
                  name: event.target.value
                })} className="form-input w-full text-gray-300 p-2" placeholder="First name" required />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="last-name">Last Name <span className="text-red-600">*</span></label>
                <input id="last-name" type="text" onChange={() => setLastName(event.target.value)} className="form-input p-2 w-full text-gray-300" placeholder="Last name" required />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                <input id="email" type="email" onChange={() => setEmail(event.target.value)} className="form-input p-2 w-full text-gray-300" placeholder="you@yourcompany.com" required />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                <input name="password" onChange={() => setPassword(event.target.value)} value={password} id="password" type="password" className=" p-2 form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <button className="btn p-2 text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={register}>Sign up</button>
              </div>
            </div>

            <br></br>
            {error && <p className='text-red-500'>{error}, sign in Instead.</p>}

          </form>

        </div>

      </div>
    </div>

  );
}

export default SignUp;