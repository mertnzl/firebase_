import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import   toast  from 'react-hot-toast';
import { getFirestore,collection,onSnapshot, } from "firebase/firestore";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:  process.env.REACT_APP_AUTH_DOMAİN,
  projectId:  process.env.REACT_APP_PROJECT_ID,
  storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGİNG_SENDER_ID ,
  appId:  process.env.REACT_APP_APP_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app)

export const register = async(email,password) =>{
    try{
  const user = await createUserWithEmailAndPassword(auth,email,password)
  return user;
}
catch(error){
    toast.error(error.message)
}
}
export const login = async (email,password)=>{
    try{
      const {user} =  await signInWithEmailAndPassword(auth,email,password)
      return user
    }
    catch(error){
        toast.error(error.message)
    }
}
export const logout = async ()=>{
    try{
      await signOut(auth)
      return true
    }
    catch(error){
        toast.error(error.message)
    }
}

const productRef =collection(db,"products");

export const useProductsListener =()=>{
useEffect(()=>{
  return onSnapshot(productRef,(snapshot)=>{
    console.log(snapshot.docs.map((doc)=>doc.data()));
  });

  
},[]);
};



export default app