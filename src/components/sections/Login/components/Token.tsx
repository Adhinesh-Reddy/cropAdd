import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import client from '../../../../backend/client';
// import { useAuth } from '../contexts/AuthContext';
import { ctxt } from '../../../../utils/AppContext';
import { useContext } from 'react';

export async function Token() {
  //   const history = useHistory();
  //   const myContext = useContext(ctxt);
  //   let path = {};
  //   async function Idtoken() {
  //     let idToken1 = '';
  const idToken = await firebase.auth()?.currentUser?.getIdToken(true);
  //     return idToken1;
  //   }
  //   client
  //     .get('/apiui', {
  //       headers: {
  //         'Accept-Language': myContext?.locale + '_' + 'IN',
  //         'auth-token': idToken,
  //       },
  //     })
  //     .then(res => {
  //     //   return res.data;
  //     });
  //   return idToken1;
  //   const demoToken = Idtoken();
  //   return demoToken;
  console.log(idToken);
  return idToken;
}
