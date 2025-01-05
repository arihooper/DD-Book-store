import React from 'react'
import Nav from "../components/Nav";
import Course from "../components/Course";
import Footer from "../components/Footer";


function Courses() {
    
  return (
    <>
    <Nav/>
    <div className="min-h-screen">
        <Course/>
        </div>
    <Footer/>
    </>
  );
}
export default Courses;