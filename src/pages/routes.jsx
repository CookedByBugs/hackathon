import React from "react";
import { Route, Routes } from "react-router-dom";
import Frontend from "./Frontend";
import Auth from "./Auth";
import PrivateRoutes from "../components/PrivateRoutes/Dashboard";
import Dashboard from "./Dashboard";

const Index = () => {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route
        path="/dashboard/*"
        element={<PrivateRoutes Component={Dashboard} />}
      />
    </Routes>
  );
};

export default Index;
