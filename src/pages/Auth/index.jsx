import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  if (isAuth) navigate("/");
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default Auth;
