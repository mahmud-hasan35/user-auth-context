import { useContext } from "react"
import { AuthContext } from "../context/Index"

export default function Profile() {
    const {user}= useContext(AuthContext);
  return (
    <div className="text-center">
        <h1>This is profile pages</h1>
        <span>{user?.email}</span>
    </div>
  )
}
