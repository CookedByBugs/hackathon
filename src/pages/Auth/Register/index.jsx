import React, { useState } from "react";
import { Col, Form, Input, message, Row, Select } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  role: "donor",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const [state, setState] = useState(initialState);
  const [userRole, setUserRole] = useState("donor");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { firstName, lastName, role, email, password, confirmPassword } = state;

    // Conditions

    if (!firstName) return message.error("Please enter your first name");
    if (!lastName) return message.error("Please enter your last name");
    if (!email) return message.error("Please enter your email");
    if (!role) return message.error("Please enter your role");
    if (!emailRegex.test(email)) return message.error("Invalid Email");
    if (!password) return message.error("Please enter your password");
    if (password < 6)
      return message.error("Password must be atleast 6 characters long");
    if (!confirmPassword)
      return message.error("Please enter your password again");
    if (password !== confirmPassword)
      return message.error("Password do not match");

    // Data Cleaning
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    email = email.toLowerCase();

    // Form Data

    const formData = {
      firstName,
      lastName,
      role: userRole,
      email,
      password,
    };
    console.log("Form data", formData);

    // API

    await axios
      .post("http://localhost:8000/api/register", formData)
      .then((res) => {
        console.log("res.data", res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="min-h-screen auth p-3 flex justify-center items-center">
      <div className="bg-white p-3 max-w-[500px] rounded-2xl w-full">
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <h3 className="text-4xl text-center font-bold my-2">Register</h3>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item className="!my-1" label="First Name:">
                <Input
                  name="firstName"
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item className="!my-1" label="Last Name:">
                <Input
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Who are you?" className="!my-1">
                <Select placeholder="Select your role" onChange={(value) => setUserRole(value)}>
                  <Select.Option value="donor">Donor</Select.Option>
                  <Select.Option value="ngo">NGO</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="!my-1" label="Email:">
                <Input
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="!my-1" label="Password:">
                <Input.Password
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className="!my-1" label="Confirm Password:">
                <Input.Password
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Link to="/auth/login">Already have an account?</Link>
            </Col>
            <Col span={24}>
              <button onClick={handleSubmit} className="btn-auth">
                Register
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Register;
