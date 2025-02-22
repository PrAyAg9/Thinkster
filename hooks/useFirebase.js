import { useState } from "react";
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const useFirebase = () => {
   const [user, setUser] = useState({});
   const router = useRouter();

   // Placeholder functions to prevent errors
   const handleGoogleSignIn = () => {
      console.warn("Google Sign-In is disabled.");
   };

   const handleRegister = (name, email, password, reset) => {
      console.warn("User registration is disabled.");
   };

   const loginUser = (email, password, reset) => {
      console.warn("User login is disabled.");
   };

   const passwordResetEmail = (email) => {
      console.warn("Password reset is disabled.");
   };

   const logout = () => {
      console.warn("Logout is disabled.");
   };

   return {
      user,
      handleGoogleSignIn,
      handleRegister,
      loginUser,
      passwordResetEmail,
      logout,
   };
};

export default useFirebase;
