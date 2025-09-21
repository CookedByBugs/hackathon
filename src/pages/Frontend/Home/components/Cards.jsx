import axios from "axios";
import React, { useEffect, useState } from "react";

const Cards = () => {
  const [campaigns, setCampaigns] = useState([]);

  const getCampaigns = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/campaign/get");
      setCampaigns(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <div className="w-[90%] mx-auto py-10">
      <h2 className="text-3xl font-bold text-center text-bar mb-10">
        Active Campaigns
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((c) => (
          <div
            key={c._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
          >
            {/* Top Accent */}
            <div className="h-2 bg-bar"></div>

            {/* Card Body */}
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

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
                  <span>Raised</span>
                  <span>
                    ${c.raisedAmount} / ${c.goalAmount}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-bar h-2 rounded-full"
                    style={{
                      width: `${Math.min(
                        (c.raisedAmount / c.goalAmount) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Spacer + Button */}
              <div className="mt-auto pt-4">
                <button className="w-full btn-primary !py-2 font-semibold rounded-xl shadow hover:scale-105 transition">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
