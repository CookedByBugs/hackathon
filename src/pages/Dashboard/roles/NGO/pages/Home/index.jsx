import React, { useEffect } from "react";
import { useTabContext } from "../../../../../../contexts/Tab/TabContext";
import { Card } from "antd";
import { PieChart, DollarSign, Users, Activity } from "lucide-react";

const Dashboard = () => {
  const { changeTab } = useTabContext();

  useEffect(() => {
    changeTab("Dashboard");
  }, []);

  return (
    <div className="mt-10 w-[90%] mx-auto min-h-screen">
      <h2 className="text-3xl font-bold text-bar mb-6">Dashboard</h2>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <DollarSign className="text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Donations</p>
              <h3 className="text-2xl font-bold">$12,450</h3>
            </div>
          </div>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <PieChart className="text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Active Campaigns</p>
              <h3 className="text-2xl font-bold">24</h3>
            </div>
          </div>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Users className="text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Donors</p>
              <h3 className="text-2xl font-bold">1,235</h3>
            </div>
          </div>
        </Card>

        <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <Activity className="text-red-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Ongoing Events</p>
              <h3 className="text-2xl font-bold">5</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Campaigns */}
      <Card className="rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Campaigns</h3>
        <ul className="space-y-3">
          <li className="flex justify-between border-b pb-2">
            <span className="font-medium">Flood Affected Families</span>
            <span className="text-gray-500 text-sm">Active</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span className="font-medium">Education for All</span>
            <span className="text-gray-500 text-sm">Closed</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Medical Aid for Children</span>
            <span className="text-gray-500 text-sm">Active</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Dashboard;
