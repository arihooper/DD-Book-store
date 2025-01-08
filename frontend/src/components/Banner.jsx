import React from 'react';

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-8 bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/book.png" 
            alt="Books Image" 
            className="max-w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <div className="w-full md:w-1/2 space-y-12 text-white">
          <h2 className="text-2xl md:text-4xl font-bold animate-bounce">
            Hello, Welcome To DD BookStore To Read and Learn New Things
            Signup To Get Our Courses 
          </h2>
          <p className="text-lg md:text-xl">
            Learning is a journey, not a destination. Every new piece of knowledge you gain is a building block to your future success.
            Think of each day as a chance to fuel your mind with new insights and ideas. The more you learn, the more doors you open to opportunities that can change your life. Stay curious, stay motivated, and never underestimate the power of daily growth.
            Your future self will thank you for every moment you dedicate to learning today.
          </p>
          <label className="input input-bordered flex items-center gap-2 mt-6 bg-white rounded-full p-2 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 text-blue-500"
            >
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
              />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
              />
            </svg>
            <input type="text" className="grow text-black" placeholder="Email" />
          </label>
          <button className="btn mt-6 btn-success bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;