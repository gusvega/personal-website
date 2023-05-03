import React, { useState } from 'react';
import Link from 'next/link';

import Header from '../components/Header';

import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ResetPassword() {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null);


  const firebaseConfig = {
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email); // call the Firebase Authentication method
      setMessage('Password reset email sent');
    } catch (error) {
      setMessage('It seems we don\'t have your email in our database, please sign up');
    }
  };


  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-black">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <h1 className="h1 mb-4 text-gray-500">Forgot your password?</h1>

              {
                !message ? (
                  <>
                  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 text-white">
                <p className="text-xl text-gray-400">Enter your email.</p>
                <p className="text-xl text-gray-400">We'll email you instructions on how to reset it.</p>
              </div>

                  <div className="max-w-sm mx-auto">
                    <form>
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                          <input id="email" type="email" className="form-input w-full text-gray-300" onChange={() => setEmail(event.target.value)} placeholder="you@yourcompany.com" required />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                          <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={handleResetPassword}>Reset Password</button>
                        </div>
                      </div>
                    </form>
                    <div className="text-gray-400 text-center mt-6">
                      <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Cancel</Link>
                    </div>
                  </div>
                  </>
                  )
                  :
                  <div className="text-gray-400 text-center mt-6">
                    <p className='text-white'>{message}</p>
                  </div>
              }



            </div>
          </div>
        </section>

      </main>

      {/* <Banner /> */}

    </div>
  );
}

export default ResetPassword;