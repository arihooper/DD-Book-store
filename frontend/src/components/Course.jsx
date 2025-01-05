import React from 'react';
import List from "../../public/List.json";
import BookCard from './bookcard';

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center text-black">
          <h1 className="text-6xl font-semibold md:text-4xl text-black">WelCome To DD Courses

          </h1>
          <p>
          Hey Friend, remember that every book you read is a new adventure waiting to be discovered.
          Each page holds the power to expand your mind, spark your imagination, and unlock endless
          possibilities. Dive into the world of books, and you'll find yourself growing wiser, more
          empathetic, and more inspired with every story. So pick up that book, and let the journey
          begin—your future self will thank you for it!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">

          {
            List.map((item)=>(<BookCard key={item.id} item={item}/>
          ))

          }
        </div>

      </div>
    </>
  );
}

export default Course;