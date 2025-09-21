import React from "react";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import { Navigate } from "react-router-dom";

const DashboardPrivate = ({ Component }) => {
  const { isAuth } = useAuthContext();
  if (!isAuth) return <Navigate to="/auth/login" />;
  return (
    <div>
      <Component />
    </div>
  );
};

export default DashboardPrivate;
