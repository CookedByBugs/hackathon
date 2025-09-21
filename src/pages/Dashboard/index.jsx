import React from "react";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import NGO from "./roles/NGO";
import Donor from "./roles/Donor";

const Dashboard = () => {
  const { user } = useAuthContext();

  return <div>{user.role == "ngo" ? <NGO /> : <Donor />}</div>;
};

export default Dashboard;
