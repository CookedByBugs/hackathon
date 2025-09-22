import React, { useEffect, useState } from "react";
import { useTabContext } from "../../../../../../contexts/Tab/TabContext";
import { useAuthContext } from "../../../../../../contexts/Auth/AuthContext";
import { Col, Form, Input, message, Row, Select } from "antd";
import axios from "axios";

const initialState = {
  title: "",
  description: "",
  goalAmount: "",
  category: "",
  raisedAmount: 0,
  status: "active",
};

const AddCampaign = () => {
  const [state, setState] = useState(initialState);
  const [categoryOption, setCategoryOption] = useState("");
  const { changeTab } = useTabContext();
  const { user } = useAuthContext();

  useEffect(() => {
    changeTab("newCampaign");
  }, [changeTab]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { title, description, goalAmount } = state;

    title = title.trim();
    description = description.trim();
    goalAmount = goalAmount.toString().trim();

    if (!title || !description || !goalAmount || !categoryOption) {
      return message.error("All fields are required");
    }

    if (isNaN(goalAmount) || Number(goalAmount) <= 0) {
      return message.error("Goal amount must be a positive number");
    }

    const formData = {
      title,
      description,
      goalAmount: Number(goalAmount),
      category: categoryOption,
      raisedAmount: 0,
      status: "active",
    };

    console.log("Submitting campaign:", formData);

    await axios
      .post("http://localhost:8000/api/campaign/create", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="w-[95%] lg:w-[80%] mx-auto mt-12">
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h3 className="text-3xl text-center font-bold text-bar mb-8">
          Create a New Fundraising Campaign
        </h3>

        <Form layout="vertical">
          <Row gutter={[20, 20]}>
            {/* Title */}
            <Col lg={8} md={12} sm={24} xs={24}>
              <Form.Item
                label={<span className="font-semibold text-bar">Title</span>}
              >
                <Input
                  name="title"
                  value={state.title}
                  onChange={handleChange}
                  placeholder="Enter campaign title"
                  className="rounded-xl"
                />
              </Form.Item>
            </Col>

            {/* Goal Amount */}
            <Col lg={8} md={12} sm={24} xs={24}>
              <Form.Item
                label={
                  <span className="font-semibold text-bar">Goal Amount</span>
                }
              >
                <Input
                  type="number"
                  name="goalAmount"
                  value={state.goalAmount}
                  onChange={handleChange}
                  placeholder="Enter goal amount"
                  className="rounded-xl"
                />
              </Form.Item>
            </Col>

            {/* Category */}
            <Col lg={8} md={24} sm={24} xs={24}>
              <Form.Item
                label={<span className="font-semibold text-bar">Category</span>}
              >
                <Select
                  value={categoryOption}
                  onChange={(value) => setCategoryOption(value)}
                  placeholder="Select category"
                  className="w-full rounded-xl"
                >
                  <Select.Option value="health">Health</Select.Option>
                  <Select.Option value="education">Education</Select.Option>
                  <Select.Option value="disaster">Disaster</Select.Option>
                  <Select.Option value="others">Others</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Description */}
            <Col span={24}>
              <Form.Item
                label={
                  <span className="font-semibold text-bar">Description</span>
                }
              >
                <Input.TextArea
                  rows={5}
                  style={{ resize: "none" }}
                  name="description"
                  value={state.description}
                  onChange={handleChange}
                  placeholder="Write about your campaign..."
                  className="rounded-xl"
                />
              </Form.Item>
            </Col>

            {/* Submit Button */}
            <Col span={24}>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary !py-3 !px-8 text-lg font-semibold shadow-md"
                  onClick={handleSubmit}
                >
                  Launch Campaign
                </button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AddCampaign;
