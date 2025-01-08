import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contacts from "./components/Contacts"; 
import AboutUs from "./components/AboutUs"; 
import PressKit from './components/PressKit'; // Import PressKit
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser , setAuthUser ] = useAuth();
  console.log(authUser );
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser  ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/press-kit" element={<PressKit />} /> 
      </Routes>
      <Toaster />
    </>
  );
}

export default App;