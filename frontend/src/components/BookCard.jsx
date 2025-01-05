import React from 'react';

function BookCard({ item }) {
    return (
        <div className="card bg-base-100 w-96  shadow-xl hover:scale-90 duration-200">
            {/* Book Image */}
            <figure className="px-10 pt-10">
                <img
                    src={item.image}
                    alt={`Cover of the book: ${item.name}`} // More descriptive alt text
                    className="rounded-xl"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body items-center text-center">
                <h2 className="card-title">Read Me! {item.name}</h2>

                <p className="mt-2">
                    {item.title}
                </p>
                <p className="mt-2">
                    By <strong>{item.author}</strong>
                </p>

                {/* Category */}
                <div className="mt-2 text-sm text-gray-500">{item.category}</div>


                {/* Button */}
                <div className="card-actions mt-4">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
