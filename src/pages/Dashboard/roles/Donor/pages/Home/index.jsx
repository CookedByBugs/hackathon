import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../../../../../contexts/Auth/AuthContext";
import {
  Heart,
  Gift,
  BarChart,
  Droplet,
  Book,
  Stethoscope,
} from "lucide-react";

const Home = () => {
  const { user } = useAuthContext();
  const [campaigns, setCampaigns] = useState([]);
  const [donations, setDonations] = useState([]);

  // 👉 Fetch campaigns
  const getCampaigns = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/campaign/get");
      setCampaigns(res.data);
    } catch (error) {
      console.error("Failed to fetch campaigns:", error);
    }
  };

  // 👉 Fetch donor donation history
  const getDonations = async () => {
    if (!user?._id) return;

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
      console.error("Failed to fetch donations:", error);
    }
  };

  useEffect(() => {
    getCampaigns();
    getDonations();
  }, [user]);

  // 👉 Calculate stats
  const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0);
  const campaignsSupported = donations.length;
  const thisMonth = donations
    .filter((d) => new Date(d.createdAt).getMonth() === new Date().getMonth())
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="p-6 space-y-10 bg-gray-50 min-h-screen mt-20">
      {/* Welcome Section */}
      <section className="bg-bar text-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold">Welcome back, Donor! ❤️</h2>
        <p className="text-sm text-gray-200 mt-1">
          Thank you for making a difference. Here’s an overview of your impact.
        </p>
      </section>

      {/* Stats Overview */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 text-center shadow-lg rounded-2xl bg-white hover:shadow-xl transition">
          <Heart className="mx-auto text-red-500 w-8 h-8 mb-2" />
          <h3 className="font-bold text-lg">Total Donations</h3>
          <p className="text-2xl font-extrabold mt-1 text-bar">
            ${totalDonations}
          </p>
        </div>

        <div className="p-6 text-center shadow-lg rounded-2xl bg-white hover:shadow-xl transition">
          <Gift className="mx-auto text-yellow-500 w-8 h-8 mb-2" />
          <h3 className="font-bold text-lg">Campaigns Supported</h3>
          <p className="text-2xl font-extrabold mt-1 text-bar">
            {campaignsSupported}
          </p>
        </div>

        <div className="p-6 text-center shadow-lg rounded-2xl bg-white hover:shadow-xl transition">
          <BarChart className="mx-auto text-green-500 w-8 h-8 mb-2" />
          <h3 className="font-bold text-lg">This Month</h3>
          <p className="text-2xl font-extrabold mt-1 text-bar">${thisMonth}</p>
        </div>
      </section>

      {/* Active Campaigns */}
      <section>
        <h2 className="text-xl font-bold mb-4">Active Campaigns</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {campaigns.slice(0, 2).map((c) => (
            <div
              key={c._id}
              className="p-5 rounded-2xl shadow-lg bg-white hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{c.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div
                  className={`h-3 rounded-full ${
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
              <div className="flex justify-between text-sm mb-3">
                <span>Raised: ${c.raisedAmount}</span>
                <span>Goal: ${c.goalAmount}</span>
              </div>
              {c.raisedAmount >= c.goalAmount ? (
                <span className="w-full text-center py-2 bg-gray-400 text-white rounded-lg block">
                  Closed
                </span>
              ) : (
                <button className="w-full bg-bar text-white py-2 rounded-lg hover:bg-bar/90 transition">
                  Donate
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Donation History */}
      <section>
        <h2 className="text-xl font-bold mb-4">Your Recent Donations</h2>
        <div className="bg-white shadow-md rounded-2xl p-4">
          <ul className="space-y-3 text-sm">
            {donations
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 3)
              .map((d) => (
                <li key={d._id} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {d.campaignId.category === "Health" ? (
                      <Stethoscope className="w-4 h-4 text-green-500" />
                    ) : d.campaignId.category === "Education" ? (
                      <Book className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <Droplet className="w-4 h-4 text-blue-500" />
                    )}
                    <span>{d.campaignId.title}</span>
                  </div>
                  <span className="font-bold text-bar">${d.amount}</span>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
