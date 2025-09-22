import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import OnGoingCampaigns from "./OnGoingCampaigns";
import AddCampaign from "./AddCampaign/AddCampaign.jsx";
import Header from "../components/Header";
import CampaignViewer from "./CampaignViewer/index.jsx";
import { useTabContext } from "../../../../../contexts/Tab/TabContext.jsx";
const Index = () => {
  const { setSiderOpen } = useTabContext();
  return (
    <div>
      <Header />
      <div onClick={() => setSiderOpen(false)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/on-going" element={<OnGoingCampaigns />} />
        <Route path="/on-going/:id" element={<CampaignViewer />} />
        <Route path="/add-campaign" element={<AddCampaign />} />
      </Routes>
      </div>
    </div>
  );
};

export default Index;
