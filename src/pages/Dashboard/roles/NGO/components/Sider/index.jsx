import React from "react";
import {
  BarChartOutlined,
  CloseOutlined,
  FileAddOutlined,
  HomeFilled,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useTabContext } from "../../../../../../contexts/Tab/TabContext";
import { Link } from "react-router-dom";

const Sider = () => {
  const { siderOpen, setSiderOpen, currentTab } = useTabContext();

  const navLinks = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: <BarChartOutlined className="text-lg" />,
      tab: "Dashboard",
    },
    {
      to: "/dashboard/on-going",
      label: "On Going Campaigns",
      icon: <FileAddOutlined className="text-lg" />,
      tab: "onGoingCampaigns",
    },
    {
      to: "/dashboard/add-campaign",
      label: "Add a Campaign",
      icon: <UserOutlined className="text-lg" />,
      tab: "newCampaign",
    },
  ];

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 z-50 min-h-screen bg-bar text-white rounded-e-3xl shadow-lg transition-all duration-300 
        ${siderOpen ? "w-64" : "w-0"} overflow-hidden`}
    >
      <div
        className={`transition-opacity duration-300 ${
          siderOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-white/20">
          <button
            title={siderOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setSiderOpen(!siderOpen)}
            className="p-2 rounded bg-secondary text-black hover:scale-105 transition-transform"
          >
            {siderOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>

          <Link
            to="/"
            title="Home"
            className="p-2 rounded bg-secondary text-black hover:scale-105 transition-transform"
          >
            <HomeFilled />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="mt-4 flex flex-col gap-2">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg mx-3 transition-all duration-200
                ${
                  currentTab === link.tab
                    ? "bg-secondary text-black font-semibold"
                    : "hover:bg-white/10 text-white"
                }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sider;
