import firebase from 'firebase/app'
import 'firebase/auth'
const app = firebase.initializeApp({
  apiKey: 'AIzaSyAN-kU6xgJWqwdBIwoC9sLR62tjv3IMzC8',
  authDomain: 'test-b57b4.firebaseapp.com',
  projectId: 'test-b57b4',
  storageBucket: 'test-b57b4.appspot.com',
  messagingSenderId: '14822782636',
  appId: '1:14822782636:web:310b541d07584a73cbd109',
  measurementId: 'G-1C5F891VZS'
})
export const auth = app.auth()
export default app
