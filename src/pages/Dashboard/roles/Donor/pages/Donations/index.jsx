import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../../../../../contexts/Auth/AuthContext";
import { Droplet, Book, Stethoscope } from "lucide-react";
import { message, Spin, Progress } from "antd";

const Donations = () => {
  const { user } = useAuthContext();
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDonations = async () => {
    if (!user?._id) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:8000/api/donations/donor/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setDonations(res.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch donations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDonations();
  }, [user]);

  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case "flood":
        return <Droplet className="w-5 h-5 text-blue-500" />;
      case "education":
        return <Book className="w-5 h-5 text-yellow-500" />;
      case "health":
        return <Stethoscope className="w-5 h-5 text-green-500" />;
      default:
        return <Droplet className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="w-[90%] mx-auto mt-20">
      <h2 className="text-3xl font-bold text-bar mb-8">Your Donations</h2>

      {loading ? (
        <div className="flex justify-center py-10">
          <Spin size="large" />
        </div>
      ) : donations.length === 0 ? (
        <p className="text-gray-600">You haven't made any donations yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {donations.map((donation) => {
            const campaign = donation.campaignId;
            const progress = Math.min(
              (campaign.raisedAmount / campaign.goalAmount) * 100,
              100
            );

            return (
              <div
                key={donation._id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    {getIcon(campaign.category || "")}
                    <h3 className="font-bold text-lg">{campaign.title}</h3>
                  </div>
                  <span className="font-bold text-bar">${donation.amount}</span>
                </div>

                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {campaign.description}
                </p>

                {/* Progress bar */}
                <Progress
                  percent={progress}
                  strokeColor={
                    campaign.raisedAmount >= campaign.goalAmount
                      ? "#22c55e"
                      : "#3b82f6"
                  }
                  showInfo={false}
                  strokeWidth={8}
                  className="mb-3"
                />

                <div className="flex justify-between items-center text-sm">
                  <span>
                    Raised: ${campaign.raisedAmount} / ${campaign.goalAmount}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-white font-medium ${
                      campaign.raisedAmount >= campaign.goalAmount
                        ? "bg-green-600"
                        : "bg-blue-600"
                    }`}
                  >
                    {campaign.raisedAmount >= campaign.goalAmount
                      ? "Payment Completed"
                      : "Ongoing"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Donations;
