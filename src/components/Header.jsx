import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Index";


export default function Header() {
  const {user,signOutUser} = useContext(AuthContext)
  console.log(user);

  const clickhandler = () => {
    signOutUser()
    .then(() => {
      console.log("user is logged out");
      
    }) .catch((err) => {
      console.log(err);
      
    })
  }
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

          </ul>
        </div>
        <a className="btn btn-ghost font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-3xl">
          Mahmud
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/register"}>Register</Link></li>
          <li><Link to={"/login"}>Login</Link></li>

          {
            user && <li><Link to={"/orders"}>orders</Link></li>
          }
          
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? (
            <>
            <span>{user?.email}</span>
            <button onClick={clickhandler} className="btn bg-red-300 text-white">Log out</button>
            </>
          )
          : <Link to={'/login'} className="btn bg-amber-200 text-white">Login</Link>
        }
        
      </div>
    </div>
  )
}
