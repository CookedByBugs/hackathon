import React, { useEffect, useState } from "react";
import { useTabContext } from "../../../../../../contexts/Tab/TabContext";
import { Col, Row, Progress, Tag } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OnGoingCampaigns = () => {
  const navigate = useNavigate();
  const { changeTab } = useTabContext();
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    changeTab("onGoingCampaigns");
  }, []);

  const getCampaign = async () => {
    await axios
      .get("http://localhost:8000/api/campaign/get", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setCampaign(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getCampaign();
  }, []);

  return (
    <div className="w-[95%] mx-auto">
      <div className="mt-30">
        <h2 className="text-4xl font-bold text-center text-bar mb-8">
          On Going Campaigns
        </h2>
        <div className="bg-secondary !min-h-[300px] p-6 rounded-3xl shadow-lg">
          <Row gutter={[24, 24]}>
            {campaign.map((item) => {
              const progress =
                item.goalAmount && item.raisedAmount
                  ? Math.min((item.raisedAmount / item.goalAmount) * 100, 100)
                  : 0;

              return (
                <Col
                  key={item._id}
                  lg={6}
                  md={8}
                  sm={12}
                  xs={24}
                  className="overflow-hidden"
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col p-5 h-full">
                    {/* Title */}
                    <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Category */}
                    <Tag
                      color="#6F00FF"
                      className="w-fit mb-3 px-3 py-1 text-sm rounded-xl"
                    >
                      {item.category}
                    </Tag>

                    {/* Description */}
                    <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
                      {item.description}
                    </p>

                    {/* Progress */}
                    <div className="mt-4">
                      <Progress
                        percent={Math.round(progress)}
                        size="small"
                        strokeColor={{
                          from: "#6F00FF",
                          to: "#3B0270",
                        }}
                        trailColor="#E9B3FB"
                        showInfo={false}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Raised: {item.raisedAmount || 0}</span>
                        <span>Goal: {item.goalAmount || 0}</span>
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() =>
                        navigate(`/dashboard/on-going/${item._id}`)
                      }
                      className="btn-primary mt-5 w-full text-center"
                    >
                      Make Changes
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OnGoingCampaigns;
