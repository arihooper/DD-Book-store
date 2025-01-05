import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Books from "../components/Books";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Nav/>
      <Banner />
      <Books />
      <Footer />
    </>
  );
}

export default Home;