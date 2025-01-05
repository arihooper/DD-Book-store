import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import List from "../../public/List.json";  // book data
import BookCard from './bookcard';         // BookCard component

function Books() {
    // Slider settings
    const settings = {
        dots: false,  // Disable dots navigation
        infinite: true, // Set to true to enable infinite scrolling
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: (
            <button 
                style={{
                    position: 'absolute',
                    top: '50%',    // Vertically center the arrow
                    left: '10px',  // Left side of the slider
                    transform: 'translateY(-50%)',
                    backgroundColor: '#FFD700', // Golden color for the button
                    border: 'none',
                    fontSize: '40px', // Increased font size
                    color: '#fff', // White text color for contrast
                    borderRadius: '50%', // Circular arrow button
                    width: '60px',  // Set width for the button
                    height: '60px', // Set height for the button
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', // Center the arrow inside the circle
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Add subtle shadow
                    zIndex: 1000, // Ensure it's above slider content
                }}
            >
                ←
            </button>
        ),  // Custom previous arrow
        nextArrow: (
            <button 
                style={{
                    position: 'absolute',
                    top: '50%',    // Vertically center the arrow
                    right: '10px', // Right side of the slider
                    transform: 'translateY(-50%)',
                    backgroundColor: '#FFD700', // Golden color for the button
                    border: 'none',
                    fontSize: '40px', // Increased font size
                    color: '#fff', // White text color for contrast
                    borderRadius: '50%', // Circular arrow button
                    width: '60px',  // Set width for the button
                    height: '60px', // Set height for the button
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', // Center the arrow inside the circle
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Add subtle shadow
                    zIndex: 1000, // Ensure it's above slider content
                }}
            >
                →
            </button>
        ),  // Custom next arrow
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h3 className="font-semibold text-xl pb-2 text-black">You Must Read Books!</h3>
                    <p className="mt-2 item-center justify-center text-center text-black">
                        Hey Friend, remember that every book you read is a new adventure waiting to be discovered.
                        Each page holds the power to expand your mind, spark your imagination, and unlock endless
                        possibilities. Dive into the world of books, and you'll find yourself growing wiser, more
                        empathetic, and more inspired with every story. So pick up that book, and let the journey
                        begin—your future self will thank you for it!
                    </p>
                </div>
            </div>

            {/* Slider component */}
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div style={{ position: 'relative' }}>
                <Slider {...settings}>
                    {List.map((item) => (
                        <BookCard item={item} key={item.id} />
                    ))}
                </Slider>
                </div>
            </div>

            {/* Arrow Container below the Slider */}
            <div style={{ 
                position: 'relative', 
                textAlign: 'center', 
                marginTop: '30px'  // Increased margin between slider and arrows
            }}>
                {/* Left Arrow */}
                <button 
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',   // Center horizontally
                        transform: 'translateX(-50%) translateY(-50%)', // Center horizontally and vertically
                        backgroundColor: '#FFD700', // Golden color for the button
                        border: 'none',
                        fontSize: '40px', // Larger font size
                        color: '#fff', // White text color for contrast
                        borderRadius: '50%', // Circular arrow button
                        width: '60px',  // Set width for the button
                        height: '60px', // Set height for the button
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', // Center the arrow inside the circle
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Add subtle shadow
                        zIndex: 1000,
                    }}
                    onClick={() => document.querySelector('.slick-prev').click()}  // Trigger slick prev action
                >
                    ←
                </button>
                
                {/* Right Arrow */}
                <button 
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '50%',  // Center horizontally (opposite side)
                        transform: 'translateX(50%) translateY(-50%)', // Center horizontally and vertically
                        backgroundColor: '#FFD700', // Golden color for the button
                        border: 'none',
                        fontSize: '40px', // Larger font size
                        color: '#fff', // White text color for contrast
                        borderRadius: '50%', // Circular arrow button
                        width: '60px',  // Set width for the button
                        height: '60px', // Set height for the button
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', // Center the arrow inside the circle
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Add subtle shadow
                        zIndex: 1000,
                    }}
                    onClick={() => document.querySelector('.slick-next').click()}  // Trigger slick next action
                >
                    →
                </button>
            </div>
        </>
    );
}

export default Books;
