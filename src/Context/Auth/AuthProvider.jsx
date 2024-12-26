import { createContext, useEffect, useState } from "react";
import app from './../../Firebase/firebase.config';
import axios from 'axios';

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const signUp = async (name, email, password, photo) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update profile with name and photo
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });

      setUser(user);
      setSuccess("Registration successful!");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Google Sign-Up/Login Function
  const signUpWithGoogle = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      setUser(user);
      setSuccess("Google sign-in successful!");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Login Function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setSuccess("Login successful!");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Logout Function
  const logout = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await signOut(auth);
      setUser(null);
      setSuccess("Logout successful!");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Observe Auth State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);

        if (currentUser?.email) {
            const user = { email: currentUser.email };

            axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                .then(res => {
                    setLoading(false);
                })

        }
        else {
            axios.post('http://localhost:5000/logout', {}, {
                withCredentials: true
            })
            .then(res => {
                setLoading(false);
            })
        }
        
    })

    return () => {
        unsubscribe();
    }
}, [])

  const authInfo = {
    user,
    setUser,
    signUp,
    signUpWithGoogle,
    login,
    logout,
    loading,
    error,
    setError,
    success,
    setSuccess,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
