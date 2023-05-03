import React, { useState } from 'react';
import SignIn from './signin';
import SignUp from './signup';

function AuthModal({ isOpen, onClose }) {
   const showHideClassName = isOpen ? "block" : "hidden";
   const [selectedItem, setSelectedItem] = useState('signin')
   


   return (
      <div className={`${showHideClassName} fixed z-10 inset-0 overflow-y-auto`}>
         <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-gray-900 opacity-75"></div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all sm:max-w-md w-full">
               <div className="bg-gray-200 text-gray-700 py-3 px-4">
                  <h2 className="text-xl font-bold">New Modal Title</h2>
               </div>

               {/* <SignIn /> */}
               <SignUp/>
               <div className="text-gray-400 text-center p-1 flex justify-between">
                  <div className='bg-gray-100 w-1/2 p-2'>Sign In</div>
                  <div className='bg-gray-100 w-1/2 p-2'>Sign Up</div>
                  {/* Don’t you have an account? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link> */}
               </div>

               <div className="bg-gray-200 flex justify-end">
                  <button className="bg-gray-700 text-white py-2 px-4 rounded" onClick={onClose}>Close</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AuthModal;
