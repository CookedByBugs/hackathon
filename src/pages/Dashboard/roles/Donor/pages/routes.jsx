import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import OngoingCampaigns from "./OnGoingCampaigns";
import Donations from "./Donations";

const Index = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="on-going" element={<OngoingCampaigns />} />
        <Route path="donations" element={<Donations />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default Index;
