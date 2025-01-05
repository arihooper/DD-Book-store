import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleClose = () => {
    const dialog = document.getElementById("my_modal_5");
    if (dialog) {
      dialog.close(); // Close the dialog when the button is clicked
    }
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-2xl text-center mb-4">Login</h3>
            <div className="mt-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 animate-pulse">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-300 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 animate-pulse">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-between items-center mt-6">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-200">
                Login
              </button>
              <p className="text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-200 cursor-pointer hover:underline">Sign Up</Link>{" "}
              </p>
            </div>
            <div className="modal-action mt-4">
              <button 
                className="btn bg-red-500 hover:bg-red-600 text-white" 
                onClick={handleClose} // Call handleClose on click
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;