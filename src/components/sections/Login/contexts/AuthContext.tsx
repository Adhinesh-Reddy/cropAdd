/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/app';

type ContextProps = {
  currentUser: firebase.User | null;
  login: (email: string, password: string) => Promise<any>;
  loginViaGoogle: () => Promise<any>;
  loginViaPhone: (phone: string) => void;
  logout: () => Promise<any>;
  resetPassword: (email: string) => Promise<any>;
  signup: (email: string, password: string) => Promise<any>;
  updateEmail: (email: string) => Promise<any> | undefined;
  updatePassword: (password: string) => Promise<any> | undefined;
};

const AuthContext = React.createContext<Partial<ContextProps>>({});
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);
  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function loginViaGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  }
  function loginViaPhone(phone: string) {
    const recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    firebase
      .auth()
      .signInWithPhoneNumber(phone, recaptcha)
      .then(function (e) {
        // eslint-disable-next-line no-alert
        const code = prompt('Enter OTP', '');
        e.confirm(code).then(function (result: any) {
          console.log(result.user);
        });
      });
  }
  function logout() {
    return auth.signOut();
  }
  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }
  function updateEmail(email: string) {
    return currentUser?.updateEmail(email);
  }
  function updatePassword(password: string) {
    return currentUser?.updatePassword(password);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    login,
    loginViaGoogle,
    loginViaPhone,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
