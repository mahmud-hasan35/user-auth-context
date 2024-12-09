import {  useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Index";



export default function Register() {
  const {createUser} = useContext (AuthContext)

  const [show,setShow] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
    .then((result) => {
      console.log(result);
      
    }) .catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className="">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <h1 className="text-violet-900 font-bold text-center text-2xl mt-2">Register Now</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type= {show ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered"
              name="password"
              required
            />
              <button type="button" onClick={() => setShow(!show)} className="absolute top-14 right-4">
          {show ? <IoIosEyeOff /> : <FaEye />}
        
        
        </button>
            <label className="label">
              <span className="label-text-alt link link-hover">
                if you have an account? please <Link to={'/login'}>Login</Link>
              </span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          {/* <div className="form-control mt-6">
            <button className="btn btn-primary">Login with Google</button>
          </div> */}
        </form>
      </div>

    </div>
  )
}




