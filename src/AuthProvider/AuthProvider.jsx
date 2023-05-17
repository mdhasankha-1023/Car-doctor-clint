import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';
import Swal from 'sweetalert2';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // success
    const successNotify = (msg) => {
            Swal.fire(
                'Success',
                `${msg}`,
                'success'
              )
    }

    // error
    const errorNotify = (msg) => {
        Swal.fire(
            'Oops....',
            `${msg}`,
            'error'
          )
    }

    // sign up with email and password
    const signUp = (email, password) => {
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const emailAndPassSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign in with google
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    // onAuth change
    useEffect( () => {
     const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(true)
        })
        return () => {
            unSubscribe()
        }
    } , [])

    // logOUt 
    const logOut = () => {
        setLoading(true)
       return signOut(auth)
    }
    
    const authInfo = {
        user, 
        loading,
        successNotify,
        errorNotify,
        googleSignIn,
        signUp,
        emailAndPassSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;