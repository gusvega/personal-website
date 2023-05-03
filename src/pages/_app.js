import '@/styles/globals.css'
import AppContext from '../AppContext';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {

  // useEffect(() => {
  //     const cookieValue = Cookies.get('user_cookie');
  //     if(cookieValue){
  //        console.log(cookieValue)
  //        const decodedToken = jwt(cookieValue)
  //        console.log(decodedToken)

  //        if (cookieValue) {
  //           setData(decodedToken)
  //        }
  //     }

  //   }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let userInfo = {
    name: 'GUSTAVO',
    email: '',
    UID: '',
    admin: false,
    analyses: {}
  }

  const [globalUserState, setGlobalUserState] = useState(userInfo)

  console.log('MY_SECRET_FROM_GITHUB', process.env.MY_SECRET_KEY)

  return (
    <AppContext.Provider value={{globalUserState, setGlobalUserState}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
