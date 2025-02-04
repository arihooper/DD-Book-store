import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useLocation here
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation(); // Now this will work
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    
    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("You signed up successfully!");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }).catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-70"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-30"></div>
        <div className="absolute inset-0 animate-pulse bg-[url('https://www.transparenttextures.com/patterns/white-paper.png')] opacity-20"></div>

        <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 w-96">
          <h3 className="font-bold text-2xl text-center mb-4 text-blue-600">Sign Up</h3>
          
          <div className="mt-4">
            <label className="block mb-1 text-black">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-red-500 text-sm mt-1 animate-pulse">
                This field is required
              </span>
            )}
          </div>

          <div className="mt-4">
            <label className="block mb-1 text-black">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 animate-pulse">
                This field is required
              </span>
            )}
          </div>

          <div className="mt-4">
            <label className="block mb-1 text-black">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1 animate-pulse">
                This field is required
              </span>
            )}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
              Sign Up
            </button>
            
            <p className="text-sm text-black">
              Already have an account?{" "}
              <button className="text-blue-600 cursor-pointer hover:underline" onClick={() => 
                  document.getElementById("my_modal_ 5").showModal()}>Login</button>{" "}<Login />

            </p>
          </div>
          <div className="modal-action mt-4">
            <form method="dialog">
              {<Link to="/" className=""> 
                  <button className="btn bg-red-500 hover:bg-red-600 text-white">Close</button></Link>}
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;