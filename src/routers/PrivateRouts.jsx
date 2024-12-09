import { useContext } from "react"
import { AuthContext } from "../context/Index"
import { Navigate } from "react-router-dom"

export default function PrivateRouts({children}) {

    const {user} = useContext(AuthContext)

    if (user) {
        return children
    }
    
  return  <Navigate to={"/login"}></Navigate>
 
}
