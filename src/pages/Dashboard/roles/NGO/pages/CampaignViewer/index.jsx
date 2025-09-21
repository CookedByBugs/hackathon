import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Form, Input, Select } from "antd";

const CampaignViewer = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState({});
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    goalAmount: 0,
    category: "",
    status: "active",
  });

  // update formState when campaign loads
  useEffect(() => {
    if (campaign && Object.keys(campaign).length > 0) {
      setFormState({
        title: campaign.title || "",
        description: campaign.description || "",
        goalAmount: campaign.goalAmount || 0,
        category: campaign.category || "",
        status: campaign.status || "active",
      });
    }
  }, [campaign]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const getCampaign = async () => {
    await axios
      .get(`http://localhost:8000/api/campaign/get/${id}`)
      .then((res) => {
        console.log(res.data);
        setCampaign(res.data);
      })
      .catch((error) => console.error(error));
  };
  const updateCampaign = async () => {
    await axios
      .put(`http://localhost:8000/api/campaign/update/${id}`, formState)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onSubmit = (values) => {
    console.log("Updated values:", values);
    // 👉 You’ll handle the API here (PUT / PATCH request)
    updateCampaign();
  };

  useEffect(() => {
    getCampaign();
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <Form layout="vertical" onFinish={() => onSubmit(formState)}>
          <Row gutter={[24, 16]}>
            <Col span={24}>
              <h3 className="text-3xl text-center font-bold mb-5 text-bar">
                Edit Campaign
              </h3>
            </Col>

            {/* Title */}
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label={<span className="font-semibold text-bar">Title</span>}
              >
                <Input
                  name="title"
                  value={formState.title}
                  onChange={handleChange}
                  placeholder="Enter campaign title"
                  className="rounded-xl py-2 px-3"
                />
              </Form.Item>
            </Col>

            {/* Goal Amount */}
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label={
                  <span className="font-semibold text-bar">Goal Amount</span>
                }
              >
                <Input
                  type="number"
                  name="goalAmount"
                  value={formState.goalAmount}
                  onChange={handleChange}
                  placeholder="Enter goal amount"
                  className="rounded-xl py-2 px-3"
                />
              </Form.Item>
            </Col>

            {/* Status */}
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label={<span className="font-semibold text-bar">Status</span>}
              >
                <Select
                  value={formState.status}
                  onChange={(value) =>
                    setFormState({ ...formState, status: value })
                  }
                  className="!w-full rounded-xl"
                >
                  <Select.Option value="active">Active</Select.Option>
                  <Select.Option value="closed">Closed</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Category */}
            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                label={<span className="font-semibold text-bar">Category</span>}
              >
                <Select
                  value={formState.category}
                  onChange={(value) =>
                    setFormState({ ...formState, category: value })
                  }
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
                  name="description"
                  value={formState.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                  className="rounded-xl py-2 px-3"
                  style={{ resize: "none" }}
                />
              </Form.Item>
            </Col>

            {/* Submit Button */}
            <Col span={24}>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary !py-2 !px-8 font-semibold shadow-md hover:scale-105 transition-transform duration-300"
                >
                  Save Changes
                </button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CampaignViewer;
