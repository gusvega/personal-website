import React, { useState } from 'react';
import SignIn from './signin';
import SignUp from './signup';

function AuthModal({ isOpen, onClose }) {
   const showHideClassName = isOpen ? "block" : "hidden";

   let [options, setOptions] = useState({
      signup: {
         container: <SignUp />,
         name: 'Sign Up'
      },
      signin: {
         name: 'Sign In',
         container: <SignIn />
      }
   })

   const [selectedItem, setSelectedItem] = useState(options.signup.name.split(' ').join('').toLowerCase())

   const handleItemClick = (item) => {
      setSelectedItem(item);
   };


   return (
      <div className={`${showHideClassName} fixed z-10 inset-0 overflow-y-auto`}>
         <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-gray-900 opacity-75"></div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all sm:max-w-md w-full">
               <div className='flex bg-black justify-end'>
                  <div className="bg-gray-200 flex justify-end">
                     <button className="bg-black text-white py-2 px-4 hover:text-gray-400" onClick={onClose}>Close</button>
                  </div>
               </div>
               {selectedItem === 'signup' ? options['signup'].container : options['signin'].container}
               <div className='flex justify-evenly'>

                  {Object.entries(options).map(([key, value]) => {
                     return (
                        <button
                           key={value.name}
                           className={`p-3 justify-center w-full text-center font-light text-gray-600 hover:bg-slate-200  ${selectedItem === key ? "active" : ""
                              } ${selectedItem === key
                                 ? "bg-slate-200 active:bg-slate-300"
                                 : "bg-slate-200"
                              }}`}
                           onClick={() => handleItemClick(key)}
                        >{value.name}</button>
                     )
                  })}
               </div>
               {/* Don’t you have an account? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link> */}

            </div>
         </div>
      </div>
   );
}

export default AuthModal;
