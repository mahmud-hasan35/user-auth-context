import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "../context/Index";
import { auth } from "../fierbase/Firebase";
import { useEffect, useState } from "react";

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  const [loader, setLoader] = useState(true)

  

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email , password)
  };

  const signOutUser = () => {
    setLoader(true)
    return  signOut(auth)
   } 
 


  useEffect(() => {
    const unSubcribe =
    onAuthStateChanged(auth , (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser)
        setLoader(false)

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
    loader,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

