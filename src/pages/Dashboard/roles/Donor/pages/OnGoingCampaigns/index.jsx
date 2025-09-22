import React, { useState, useEffect } from "react";
import { Modal, Input, message } from "antd";
import axios from "axios";
import { useAuthContext } from "../../../../../../contexts/Auth/AuthContext";
import { useTabContext } from "../../../../../../contexts/Tab/TabContext";

const OngoingCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [amount, setAmount] = useState("");
  const { user } = useAuthContext();
  const { changeTab } = useTabContext();
  useEffect(() => {
    changeTab("onGoingCampaigns");
  }, [changeTab]);
  // 👉 Fetch campaigns
  const getCampaigns = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/campaign/get-public"
      );
      setCampaigns(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  // 👉 Open modal
  const showModal = (campaign) => {
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  // 👉 Handle donation
  const handleOk = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      message.error("Please enter a valid donation amount");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/donations/create",
        {
          donorId: user._id, // 👉 replace with logged-in donor's ID from auth
          campaignId: selectedCampaign._id,
          amount: Number(amount),
        }
      );

      if (res.data.success) {
        message.success(
          `You donated $${amount} to "${selectedCampaign.title}" 🎉`
        );

        // 👉 Update raisedAmount in UI instantly without refetching all
        setCampaigns((prev) =>
          prev.map((c) =>
            c._id === selectedCampaign._id
              ? { ...c, raisedAmount: c.raisedAmount + Number(amount) }
              : c
          )
        );

        setIsModalOpen(false);
        setAmount("");
      }
    } catch (error) {
      console.error(error);
      message.error("Failed to process donation. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setAmount("");
  };

  return (
    <div className="w-[90%] mx-auto mt-20">
      <h2 className="text-3xl font-bold text-center text-bar mb-10">
        Ongoing Campaigns
      </h2>

      {/* Campaign Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((c) => (
          <div
            key={c._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col overflow-hidden"
          >
            <div className="h-2 bg-bar"></div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {c.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {c.description}
              </p>

              <div className="mb-4">
                <span className="inline-block bg-bar/10 text-bar px-3 py-1 rounded-full text-xs font-medium">
                  {c.category}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
                  <span>Raised</span>
                  <span>
                    ${c.raisedAmount} / ${c.goalAmount}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      c.raisedAmount >= c.goalAmount ? "bg-green-500" : "bg-bar"
                    }`}
                    style={{
                      width: `${Math.min(
                        (c.raisedAmount / c.goalAmount) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Donate Button / Closed Badge */}
              <div className="mt-auto pt-4">
                {c.raisedAmount >= c.goalAmount ? (
                  <span className="w-full text-center py-2 bg-gray-400 text-white rounded-xl block">
                    Closed
                  </span>
                ) : (
                  <button
                    onClick={() => showModal(c)}
                    className="w-full bg-bar text-white py-2 rounded-xl shadow hover:scale-105 transition"
                  >
                    Donate Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Donation Modal */}
      <Modal
        title={
          <span className="font-bold text-lg text-bar">
            Donate to {selectedCampaign?.title}
          </span>
        }
        open={isModalOpen}
        onOk={handleOk}
        okText="Confirm Donation"
        onCancel={handleCancel}
        centered
      >
        <p className="mb-2 text-gray-700">
          Enter the amount you want to donate:
        </p>
        <Input
          type="number"
          placeholder="e.g. 50"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p className="mt-4 text-sm text-gray-500">
          💡 100% of your donation goes directly to{" "}
          <strong>{selectedCampaign?.title}</strong>.
        </p>
      </Modal>
    </div>
  );
};

export default OngoingCampaigns;
