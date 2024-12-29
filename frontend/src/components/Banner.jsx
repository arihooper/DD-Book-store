import React from 'react';

function Banner() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex">
        <div className="w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h2 className="text-2xl md:text-4xl font-bold">
              Hello Welcome To DD BookStore To Read and Learn New Things
            </h2>
            <p>
              Learning is a journey, not a destination. Every new piece of knowledge you gain is a building block to your future success.
              Think of each day as a chance to fuel your mind with new insights and ideas. The more you learn, the more doors you open to opportunities that can change your life. Stay curious, stay motivated, and never underestimate the power of daily growth.
              Your future self will thank you for every moment you dedicate to learning today.
            </p>
          </div>
          <label className="input input-bordered flex items-center gap-2 mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
              />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
              />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button className="btn mt-6 btn-success">Submit</button>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/book.png" alt="Books Image" />
        </div>
      </div>
    </>
  );
}

export default Banner;
