import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [state, setState] = useState(initialState);
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();
  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { email, password } = state;

    // Conditions

    if (!email) return message.error("Please enter your email");
    if (!password) return message.error("Please enter your password");

    // Data Cleaning

    email = email.trim();
    email = email.toLowerCase();

    // Form Data

    const formData = {
      email,
      password,
    };

    console.log("formData", formData);

    await axios
      .post("http://localhost:8000/api/login", formData)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("authToken", res.data.token);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  if (isAuth) navigate("/");

  return (
    <div className="min-h-screen auth p-3 flex justify-center items-center">
      <div className="bg-white p-3 max-w-[500px] rounded-2xl w-full">
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <h3 className="text-4xl text-center font-bold my-2">Login</h3>
            </Col>
            <Col span={24}>
              <Form.Item label="Email:">
                <Input
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="!mb-0" label="Password:">
                <Input.Password
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Link className="!my-0" to="/auth/register">
                Don't have an account?
              </Link>
            </Col>
            <Col span={24} className="!my-0">
              <button onClick={handleSubmit} className="btn-auth my-0">
                Login
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Login;
