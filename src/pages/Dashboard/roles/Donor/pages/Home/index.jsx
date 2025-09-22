import React from "react";
import { Heart, Gift, BarChart } from "lucide-react";

const Home = () => {
  return (
    <div className="p-6 space-y-10 bg-gray-50 min-h-screen mt-20">
      {/* Welcome Section */}
      <section className="bg-blue-600 text-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold">Welcome back, Donor! ❤️</h2>
        <p className="text-sm text-gray-200 mt-1">
          Thank you for making a difference. Here’s an overview of your impact.
        </p>
      </section>

      {/* Stats Overview */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 text-center shadow-lg rounded-2xl bg-white">
          <Heart className="mx-auto text-red-500 w-8 h-8 mb-2" />
          <h3 className="font-bold text-lg">Total Donations</h3>
          <p className="text-2xl font-extrabold mt-1">$1,250</p>
        </div>

        <div className="p-6 text-center shadow-lg rounded-2xl bg-white">
          <Gift className="mx-auto text-yellow-500 w-8 h-8 mb-2" />
          <h3 className="font-bold text-lg">Campaigns Supported</h3>
          <p className="text-2xl font-extrabold mt-1">8</p>
        </div>

        <div className="p-6 text-center shadow-lg rounded-2xl bg-white">
          <BarChart className="mx-auto text-green-500 w-8 h-8 mb-2" />
          <h3 className="font-bold text-lg">This Month</h3>
          <p className="text-2xl font-extrabold mt-1">$300</p>
        </div>
      </section>

      {/* Active Campaigns */}
      <section>
        <h2 className="text-xl font-bold mb-4">Active Campaigns</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl shadow-lg bg-white">
            <h3 className="text-lg font-bold">Flood Relief Fund</h3>
            <p className="text-sm text-gray-600 mb-3">
              Providing food & shelter for displaced families.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <div className="flex justify-between text-sm mb-3">
              <span>Raised: $600</span>
              <span>Goal: $1000</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Donate
            </button>
          </div>

          <div className="p-5 rounded-2xl shadow-lg bg-white">
            <h3 className="text-lg font-bold">Education for All</h3>
            <p className="text-sm text-gray-600 mb-3">
              Help underprivileged kids go to school.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <div className="flex justify-between text-sm mb-3">
              <span>Raised: $450</span>
              <span>Goal: $1000</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Donate
            </button>
          </div>
        </div>
      </section>

      {/* Donation History */}
      <section>
        <h2 className="text-xl font-bold mb-4">Your Recent Donations</h2>
        <div className="bg-white shadow-md rounded-2xl p-4">
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <span>🌊 Flood Relief Fund</span>
              <span className="font-bold">$100</span>
            </li>
            <li className="flex justify-between">
              <span>📚 Education for All</span>
              <span className="font-bold">$50</span>
            </li>
            <li className="flex justify-between">
              <span>🏥 Health Aid Program</span>
              <span className="font-bold">$75</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
