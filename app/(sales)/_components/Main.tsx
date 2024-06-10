import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Categories from "./categories/Categories";
import Services from "./services/Services";

const Main = () => {
  return (
    <>
      <div className="bg-[#C2DDE8]">
        <Hero />
      </div>
      <div>
        <Categories />
      </div>
      <div className="my-16">
        <Services />
      </div>
    </>
  );
};

export default Main;
