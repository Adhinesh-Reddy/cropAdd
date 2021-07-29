import firebase from 'firebase/app';
import 'firebase/auth';
// const app = firebase.initializeApp({
//   apiKey: 'AIzaSyAN-kU6xgJWqwdBIwoC9sLR62tjv3IMzC8',
//   authDomain: 'test-b57b4.firebaseapp.com',
//   projectId: 'test-b57b4',
//   storageBucket: 'test-b57b4.appspot.com',
//   messagingSenderId: '14822782636',
//   appId: '1:14822782636:web:310b541d07584a73cbd109',
//   measurementId: 'G-1C5F891VZS'
// })

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCsmvdqT4tVRhRvDcvhxi4Xa-8sAU-g0l4',
  authDomain: 'cropdarpan-c13c0.firebaseapp.com',
  databaseURL: 'https://cropdarpan-c13c0-default-rtdb.firebaseio.com',
  projectId: 'cropdarpan-c13c0',
  storageBucket: 'cropdarpan-c13c0.appspot.com',
  messagingSenderId: '391060313193',
  appId: '1:391060313193:web:075ea505363a03de3c3ef8',
});
export const auth = app.auth();
export default app;
