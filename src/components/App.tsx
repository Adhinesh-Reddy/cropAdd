import React, { useState, useContext } from 'react';

import { LocaleHelper } from '../utils/LocaleHelper';
import { I18NHelper } from '../utils/I18NHelper';
import { IntlProvider } from 'react-intl';
import { LocaleContextInterface, LocaleContextProvider } from '../utils/AppContext';

import './App.css';
import Layout from './Layout/Layout';
import ExpertLayout from './Layout/ExpertLayout';
import { Token } from './../components/sections/Login/components/Token';
import client from './../backend/client';
import { ctxt } from './../utils/AppContext';
import firebase from 'firebase';

function App() {
  const myContext = useContext(ctxt);
  const [path, setPath] = useState('');

  const [userLocale, setUL] = useState(LocaleHelper.getUserLanguageCode());

  const ulSetter = (lang: string) => setUL(lang);

  const AppContext: LocaleContextInterface = {
    locale: userLocale,
    ulSetter,
    languages: I18NHelper.getAllAvailableLocales(),
  };

  // return (
  //   <p>Hiiii</p>
  // )

  // async function demo1() {
  //   const demo = Token();
  //   let promise = Promise.resolve(demo);
  //   promise.then(function (val) {
  //     console.log(val);
  //   });
  // }
  // demo1();
  // const idToken = await firebase.auth()?.currentUser?.getIdToken(true);
  // console.log(idToken);

  const idToken = localStorage.getItem('userInfo');

  // console.log(idToken);
  // localStorage.removeItem('userInfo');

  React.useEffect(() => {
    client
      .get('/apiui', {
        headers: {
          'Accept-Language': myContext?.locale + '_' + 'IN',
          'auth-token': idToken,
        },
      })
      .then(res => {
        let path1 = res.data;
        setPath(path1.data[0].path);
      });
  }, [myContext, idToken]);

  return (
    <div className='App'>
      <LocaleContextProvider value={AppContext}>
        <IntlProvider
          messages={I18NHelper.getMessagesByLanguageCode(userLocale)}
          locale={userLocale}
          defaultLocale={LocaleHelper.defaultLanguageCode()}
        >
          <Layout />

          {/* <ExpertLayout /> */}
        </IntlProvider>
      </LocaleContextProvider>
    </div>
  );
}

export default App;
