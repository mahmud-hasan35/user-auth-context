import { useContext } from "react"
import { AuthContext } from "../context/Index"
import { Navigate } from "react-router-dom"

export default function PrivateRouts({children}) {

    const {user, loader} = useContext(AuthContext);

    if (loader) {
      return <>
      <div className="text-center"> 
<span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>

      </div>

      </>
      
    }

    if (user) {
        return children
    }
    
  return  <Navigate to={"/login"}></Navigate>
 
}

