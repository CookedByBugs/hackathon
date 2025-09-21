import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Frontend = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default Frontend;
