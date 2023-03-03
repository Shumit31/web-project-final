import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile}
 from 'firebase/auth';

export const AuthContext =createContext();
const auth= getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

    const [loading,setLoading]=useState(true);


    //sign up method
 const createUser=(email,password)=>{
   setLoading(true);
    return  createUserWithEmailAndPassword(auth, email, password);
 }

 //signIn method
 const signIn=(email,password)=>{
   setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
 }


 //update profile
const updateUser=(userInfo)=>{
   return updateProfile(auth.currentUser,userInfo);
}


//signout user
const logOut=()=>{
   setLoading(true);
   return signOut(auth);
}



//creating observer for logging 
 useEffect(()=>{
  const unsubscribe  =onAuthStateChanged(auth,currentUser=>{
        console.log('user observing');
        setUser(currentUser);
        setLoading(false);
    });
    return ()=>unsubscribe();
 },[])



      
    const authInfo={
   createUser,
   signIn,
   updateUser,
   logOut,
   user,
   loading
  
   
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}

    </AuthContext.Provider>
  );
};

export default AuthProvider;
