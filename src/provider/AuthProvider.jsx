import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "../context/Index";
import { auth } from "../fierbase/Firebase";
import { useEffect, useState } from "react";

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email , password)
  };

  const signOutUser = () => {
    return  signOut(auth)
   } 
 


  useEffect(() => {
    const unSubcribe =
    onAuthStateChanged(auth , (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser)
      } else {
        setUser(null)
      }
    });
    return () => {
      unSubcribe()

    }
  }, []);
  

 
  const authInfo = {
    user,
    createUser,
    signUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

