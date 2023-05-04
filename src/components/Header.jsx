// import React, { useState, useRef, useEffect, useContext } from 'react';
// import Link from 'next/link';
// import logo from '../../public/logo.jpg';
// import { useRouter } from 'next/router';
// import { AppContext } from '../AppContext';
// import Image from 'next/image';
// import { destroyCookie } from 'nookies';




// function Header() {

//    const [mobileNavOpen, setMobileNavOpen] = useState(false);
//    const { data, setData } = useContext(AppContext);

//    const trigger = useRef(null);
//    const mobileNav = useRef(null);


//    // close the mobile menu on click outside
//    useEffect(() => {
//       const clickHandler = ({ target }) => {
//          if (!mobileNav.current || !trigger.current) return;
//          if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
//          setMobileNavOpen(false);
//       };
//       document.addEventListener('click', clickHandler);
//       return () => document.removeEventListener('click', clickHandler);
//    });

//    // close the mobile menu if the esc key is pressed
//    useEffect(() => {
//       const keyHandler = ({ keyCode }) => {
//          if (!mobileNavOpen || keyCode !== 27) return;
//          setMobileNavOpen(false);
//       };
//       document.addEventListener('keydown', keyHandler);
//       return () => document.removeEventListener('keydown', keyHandler);
//    });

//    const router = useRouter();

//    function routeChangeSignUp() {
//       router.push('/signup');
//    }

//    const signout = async (e) => {
//       e.preventDefault()
//       router.push('/');
//       setData({
//          ...data,                                // spreading the unchanged values
//          email: null,          // changing the state of *changed value*
//       })

//       // console.log(data)
//       destroyCookie(null, 'user_cookie');
//    }



//    return (
//       <header className='absolute w-full z-30 bg-white - h-36 flex'>
//          <div className='max-auto px-4 '>
//             <div className="flex items-center justify-between h-20">
//                {/* Site branding */}
//                {/* <div className="bg-yellow-500 px-1 fixed top-0 left-0 right-0 z-25">
//                   <p className="text-black text-xs font-bold">
//                      Web app still being developed. Please be patient :)
//                   </p>
//                </div> */}
//                <div className="shrink-0 mr-4">
//                   {/* Logo */}
//                   <Link href="/" className="block" aria-label="Cruip">
//                   <div className=''>Vega Digital</div>
//                      {/* <Image alt="Thumbnail image for video: Title of Video" className="max-h-20 w-10" src={logo} /> */}
//                   </Link>
//                </div>
//                <div className='text-white'>{data.email}</div>


//                <nav className="hidden md:flex md:grow">
//                   {!data.email
//                      ? <ul className="flex grow justify-end flex-wrap items-center">
//                         <li>
//                            <Link href="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Dashboard</Link>
//                         </li>
//                         <li>
//                            <Link href="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
//                         </li>
//                         <li>
//                            <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Sign up</Link>
//                         </li>
//                      </ul>
//                      : <ul className="flex grow justify-end flex-wrap items-center">
//                         <li>
//                            <Link href="https://vega-digital---dashboard.web.app/admin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Dashboard</Link>
//                         </li>
//                         <li>
//                            <Link href="/" onClick={signout} className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Sign Out</Link>
//                         </li>
//                      </ul>
//                   }
//                </nav>

//                <div className="md:hidden">

//                   {/* Hamburger button */}
//                   <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
//                      <span className="sr-only">Menu</span>
//                      <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <rect y="4" width="24" height="2" rx="1" />
//                         <rect y="11" width="24" height="2" rx="1" />
//                         <rect y="18" width="24" height="2" rx="1" />
//                      </svg>
//                   </button>

//                   {/*Mobile navigation */}
//                   <nav id="mobile-nav" ref={mobileNav} className="absolute right-0 w-screen h-screen overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}>
//                      {!data.email
//                         ? <ul className="bg-gray-800 py-2">
//                         <li>
//                               <Link href="/" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Home</Link>
//                            </li>
//                            <li>
//                               <Link href="/dashboard" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Dashboard</Link>
//                            </li>
//                            <li>
//                               <Link href="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</Link>
//                            </li>
//                            <li >
//                               <Link href="/signup" className="font-medium w-full inline-flex px -2 items-center justify-center border border-transparent py-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</Link>
//                            </li>
//                         </ul>
//                         : <ul className="bg-gray-800 px-4 py-2">
//                            <li>
//                               <Link href="/" className="flex font-medium w-full text-purple-600 hover:text-gray-200 px-2 justify-center">Dashboard</Link>
//                            </li>
//                            <li>
//                               <Link href="/" onClick={signout} className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign Out</Link>
//                            </li>
//                         </ul>
//                      }
//                   </nav>

//                </div>

//             </div>
//          </div>



//       </header>
//    );
// }

// export default Header;
