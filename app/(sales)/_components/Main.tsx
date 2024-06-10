import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Categories from "./categories/Categories";

const Main = () => {
  return (
    <>
      <div className="bg-[#C2DDE8]">
        <Navbar />
        <Hero />
      </div>
      <Categories />
    </>
  );
};

export default Main;
