import React, { useEffect, useState } from 'react'; // Import useState here
import BookCard from './bookcard';
import axios from "axios";


function Course() {
  const [book, setBook] = useState([]); // Initialize state for books

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book"); // Ensure the port matches your server
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook(); // Call the function to fetch books
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center text-black">
          <h1 className="text-6xl font-semibold md:text-4xl text-black">Welcome To DD Courses</h1>
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
            book.map((item) => (
              <BookCard key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;