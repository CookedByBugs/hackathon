import React, { useEffect, useState } from "react";
import { useTabContext } from "../../../../../../contexts/Tab/TabContext";
import { Card, Spin } from "antd";
import { PieChart, DollarSign, Users, Activity } from "lucide-react";
import axios from "axios";

const Dashboard = () => {
  const { changeTab } = useTabContext();

  const [stats, setStats] = useState({
    totalDonations: 0,
    activeCampaigns: 0,
    donors: 0,
    ongoingEvents: 0,
  });
  const [recentCampaigns, setRecentCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    changeTab("Dashboard");
    fetchStats();
    fetchCampaigns();
  }, []);

  // Fetch stats API
  const fetchStats = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/dashboard/stats", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setStats(res.data);
    } catch (err) {
      console.error("Error fetching stats:", err);
    }
  };

  // Fetch campaigns API
  const fetchCampaigns = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/dashboard/recent", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setRecentCampaigns(res.data);
    } catch (err) {
      console.error("Error fetching campaigns:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 w-[90%] mx-auto min-h-screen">
      <h2 className="text-3xl font-bold text-bar mb-6">📊 Dashboard</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Spin size="large" />
        </div>
      ) : (
        <>
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Donations */}
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <DollarSign className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Donations</p>
                  <h3 className="text-2xl font-bold">
                    ${stats.totalDonations.toLocaleString()}
                  </h3>
                </div>
              </div>
            </Card>

            {/* Campaigns */}
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <PieChart className="text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Active Campaigns</p>
                  <h3 className="text-2xl font-bold">{stats.activeCampaigns}</h3>
                </div>
              </div>
            </Card>

            {/* Donors */}
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Users className="text-yellow-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Donors</p>
                  <h3 className="text-2xl font-bold">{stats.donors}</h3>
                </div>
              </div>
            </Card>

            {/* Events */}
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Activity className="text-red-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Ongoing Events</p>
                  <h3 className="text-2xl font-bold">{stats.ongoingEvents}</h3>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Campaigns */}
          <Card className="rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">🆕 Recent Campaigns</h3>
            {recentCampaigns.length > 0 ? (
              <ul className="space-y-3">
                {recentCampaigns.map((c) => (
                  <li
                    key={c._id}
                    className="flex justify-between border-b pb-2 last:border-0"
                  >
                    <span className="font-medium">{c.title}</span>
                    <span
                      className={`text-sm px-2 py-0.5 rounded-full ${
                        c.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {c.status}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">No recent campaigns found.</p>
            )}
          </Card>
        </>
      )}
    </div>
  );
};

export default Dashboard;

