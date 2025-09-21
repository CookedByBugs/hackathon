import React from "react";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Hero from "./components/Hero.jsx";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className="">
        <Hero />
        <Cards />

      </div>
    </div>
  );
};

export default Home;
