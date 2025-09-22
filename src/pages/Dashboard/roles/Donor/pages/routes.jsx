import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import OngoingCampaigns from "./OnGoingCampaigns";
import Donations from "./Donations";
import { useTabContext } from "../../../../../contexts/Tab/TabContext";

const Index = () => {
    const { setSiderOpen } = useTabContext();
  return (
    <div>
      <Header />
      <div onClick={() => setSiderOpen(false)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="on-going" element={<OngoingCampaigns />} />
          <Route path="donations" element={<Donations />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;
