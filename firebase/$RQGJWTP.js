import { useEffect, useState } from "react";
import {
   getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword,
   updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, signOut
} from "firebase/auth";
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import firebaseInitialization from "../firebase/firebase.init";

// initialize firebase app
firebaseInitialization();

const useFirebase = () => {
   const [user, setUser] = useState({});
   const router = useRouter();
  
   // googleProvider
   const googleProvider = new GoogleAuthProvider();
   // auth
   const auth = getAuth();
   // handle google sign in
   const handleGoogleSignIn = (router) => {
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            const user = result.user;
            setUser(user);
            usersCollection(user.displayName,user.email,'PUT')
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Register Successfully',
            })
            router.push('/')
         }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
         });
   }


   // register user
   const handleRegister = (name, email, password,reset,router) => {
      createUserWithEmailAndPassword(auth, email, password)
         .then((result) => {
            const user = result.user;
            setUser({ displayName: name, email })
            usersCollection(name,email,'POST')
            // update user profile
            updateProfile(auth.currentUser, {
               displayName: name,
            }).then(() => {

            }).catch((error) => {

            });

            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Register Successfully',
            })
            reset()
            router.push('/')
         })
         .catch((error) => {
            const errorMessage = error.message;
         });
   }

   // login user
   const loginUser = (email, password,reset,router) => {
      signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
            const user = result.user;
            setUser(user)
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Login Successfully',
               timer: 1500
            })
            reset()
            router.push('/')
         })
         .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: errorMessage,
               timer: 1500
            })
         });
   }

   // password reset email
   const passwordResetEmail = (email) => {
      sendPasswordResetEmail(auth, email)
         .then(() => {
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'Password reset email sent',
            })
         })
         .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: errorMessage,
               timer: 1500
            })
         });

   }

   // logout
   const logout = () => {
      signOut(auth).then(() => {
         setUser({})
         Swal.fire({
            icon: 'success',
            title: 'Logout Successfully',
         })
         router.push('/')
      }).catch((error) => {
         const errorMessage = error.message;
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMessage,
            timer: 1500
         })
      });
   }


   // on auth state change
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user)
         } else {
            setUser({})
         }
      });
      return () => unsubscribe()
   }, [auth]);

   // use collection
   const usersCollection = (name,email,userMethod) => {
      const userData = {
         displayName:name,
         email,
      }
      const url = `https://eduker-server.onrender.com/users`
      fetch(url,{
         method:userMethod,
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(userData)
      })
      .then(res => res.json())
      .then(result => console.log(result))
   }

   return {
      user,
      handleGoogleSignIn,
      handleRegister,
      loginUser,
      passwordResetEmail,
      logout,
   }
}

export default useFirebase;