import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth"

import './App.css'
import { auth } from "./fierbase/Firebase"
import { useState } from "react"


function App() {

  
  const gooleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider();

  const [users,setUsers] = useState(null)

  const handleClick = () => {
    signInWithPopup(auth, gooleProvider)
    .then((result) => {
     setUsers(result.user) 
     console.log(result);
     
    })
    .catch((error) => {
      console.log(error);
      setUsers(null)
    })
    
  }

  const handleLogOut = () => {
    signOut(auth).then(() => {
      
      
      setUsers(null)
      
      
      
    }) .catch((error) => {
      console.log(error);
      

    })
    
  }

const handleGitHub = () => {
  signInWithPopup(auth, githubProvider)
  .then((result) => {
    console.log(result);
    setUsers(result.user)
    
  })
  .catch((error) => {
    setUsers(null);
    console.log(error);
    
  })
}

  return (
    <>
    {
      users ? (<button onClick={handleLogOut}>Log out</button>
      )
      :(<>
      <button onClick={handleClick}>Log in with google</button>
        <br />
        <br />
      <button onClick={handleGitHub}>Log in with Github</button>
      </>
      
      )

    }
   
   
   {
    users&& <div>
      <h1>{users?.displayName}</h1>
      <p>{users?.email}</p>
      <img referrerPolicy="no-referrer" src={users?.photoURL} alt="image" />
      </div>
   }
   
   <br />
   <br />
   
    </>
  )
}

export default App
