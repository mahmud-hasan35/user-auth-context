import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Index";

export default function Login() {

  const {signUser} = useContext(AuthContext);

  const navigate = useNavigate()


  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // sing in

    signUser(email, password)
    .then((result) => {
      console.log(result);
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
      
    })

  };
  return (
    <div className="">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <h1 className="text-violet-900 font-bold text-center text-2xl mt-2">Login Now</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={show ? "text" : "password"} placeholder="password" className="input input-bordered" name="password" required />
            <button type="button" onClick={() => setShow(!show)} className="absolute top-14 right-4">
              {show ? <IoIosEyeOff /> : <FaEye />}


            </button>
            <label className="label">
              if you don't have account please
              <Link to={'/register'}>Register</Link>
            </label>

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>

    </div>
  )
}
