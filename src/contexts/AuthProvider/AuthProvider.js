import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    // user ache kina seta check korar jonno
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // SignUp
  const createUser = (email, password) => {
      setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
  }
  // Login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
// google sign in
  const googleSignIn = () => {
      setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }  
   const updateUserProfile = (profile) => {
     return updateProfile (auth.currentUser, profile);
   };

 const logOut = () => {
   setLoading(true);
   return signOut(auth);
 };

    // userlogin hoyeche naki hoy ni buthar jonno
    // useEffect karon external er sathe communicate korche
    // 1st parameter e observer set kore dibo

    // jokhon ami ekhan theke chole jabo eta korbe
    useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          //  console.log("inside auth state change", currentUser);
           //   if (currentUser === null || currentUser.emailVerified) {
           //     setUser(currentUser);
           //   }
           setUser(currentUser);
           setLoading(false);
         });

         return () => {
           unsubscribe();
         };
    },[])
    const authInfo = {
      user,
      loading,
      createUser,
      login,
      logOut,
      googleSignIn,
      updateUserProfile,
      setLoading,
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;