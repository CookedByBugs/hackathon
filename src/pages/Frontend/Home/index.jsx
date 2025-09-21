import React from "react";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Hero from "./components/Hero.jsx";
import AboutUs from "./components/About.jsx";
import Team from "./components/Team.jsx";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className="">
        <Hero />
        <AboutUs />
        <Cards />
        <Team />
      </div>
    </div>
  );
};

export default Home;
