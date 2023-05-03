import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



// import Header from '../Header';

// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword, getIdToken } from "firebase/auth";

import Cookies from 'universal-cookie';
import jwt from 'jwt-decode'
import AppContext from '@/AppContext';



const SignIn = () => {

  // const [error, setError] = useState(null)
  // const [password, setPassword] = useState('')
  // const [email, setEmail] = useState('')
  // const { globalUserState, updateGlobalUserStateAnalyses } = useContext(AppContext);


  // const cookies = new Cookies()

  // const handleSignUpCookie = (token) => {
  //   const decodedToken = jwt(token)

  //   console.log('Decoded Token', decodedToken)

  //   cookies.set('user_cookie', token, {
  //     expires: new Date(decodedToken.exp * 1000)
  //   })
  // }

  // // // --- Cookies
  // const router = useRouter();

  // const goToRoot = () => {
  //   router.push('/');
  // }

  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);

  // const handleSignIn = async (e) => {
  //   e.preventDefault();
  //   await signInWithEmailAndPassword(auth, email, password)
  //     .then((res) => {
  //       const userRes = res.user;
  //       // console.log('RES: ', userRes)
  //       userRes.getIdToken().then((token) => {
  //         console.log(token);
  //         // createCookie(token)
  //         handleSignUpCookie(token)
  //       });

  //       setData({
  //         ...data,                                // spreading the unchanged values
  //         email: email,          // changing the state of *changed value*
  //       })

  //       goToRoot()
  //     })
  //     .catch(err => {
  //       console.log(err.code)
  //       if (err.code === 'auth/wrong-password') {
  //         console.log('Wrong password')
  //         setError('Wrong password')
  //       } else if (err.code === 'auth/user-not-found') {
  //         console.log('User not found in our database')
  //         setError('User not found in our database')
  //       } else if (err.code === 'auth/too-many-requests') {
  //         console.log('Too many requests')
  //         setError('Too many request, wait 30 minutes before trying again')
  //       }
  //     })
  // };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-black">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">


        <div className="max-w-3xl mx-auto text-center text-white pb-12 md:pb-20">
          <h1 className="h1">Welcome.</h1>
          <h1 className="h1">I exist to make Real Estate easier.</h1>              </div>


        <div className="max-w-sm mx-auto">
          <form>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input id="email" type="email" onChange={() => setEmail(event.target.value)} className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                <input name="password" onChange={() => setPassword(event.target.value)} value='{password}' id="password" type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <div className="flex justify-end">
                  <Link href="/resetpassword" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Forgot Password?</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick='{handleSignIn}'>Sign in</button>
              </div>
            </div>
            <br></br>
            {/* {error && <p className='text-red-500'>{error}</p>} */}

          </form>
         
        </div>

      </div>
    </div>

  );
}

export default SignIn;