import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";

const Index = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Index;
