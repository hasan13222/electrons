import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
      }


    const handleSignOut = () => {
        setLoading(false);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setLoading(false);
            setUser(user);
          } else {
            setUser(false);
          }
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

    const contextValues = {
        loading,
        handleSignUp,
        handleSignIn,
        handleSignOut,
        handleGoogleSignIn,
        user
    }
  return (
    <AuthContext.Provider value={contextValues}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider