import React, { useState } from "react";
import {
  BarChartOutlined,
  BookOutlined,
  CloseOutlined,
  FileAddOutlined,
  FileOutlined,
  FlagOutlined,
  HomeFilled,
  LockOutlined,
  MenuOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useTabContext } from "../../../../../../contexts/Tab/TabContext";
import { Link } from "react-router-dom";
const Sider = () => {
  const { siderOpen, setSiderOpen, currentTab } = useTabContext();
  return (
    <div
      className={`bg-bar rounded-e-4xl z-50 fixed top-0 bottom-0 left-0 min-h-screen md:max-w-[350px] max-w-[300px] text-white transition-all duration-300 ${
        siderOpen ? "w-full" : "w-0"
      }`}
    >
      <div
        className={`mx-auto ${
          siderOpen ? "p-2" : "p-2 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex justify-between items-center">
          <button
            title={siderOpen ? "Close Sider" : "Open sider"}
            onClick={() => setSiderOpen(!siderOpen)}
            className={`w-[50px] my-2 block p-3 rounded text-xl transition-all duration-300 ${
              siderOpen ? "bg-secondary text-black " : "bg-bar ms-2.5"
            }`}
          >
            {!siderOpen ? <MenuOutlined /> : <CloseOutlined />}
          </button>
          <Link
            to={"/"}
            title="Home"
            className={`w-[50px] bg-secondary text-black my-2 block p-3 text-center rounded text-xl transition-all duration-300`}
          >
            <HomeFilled />
          </Link>
        </div>
        <Link
          to={"/dashboard"}
          className={`sider-link ${
            currentTab == "Dashboard" ? "bg-secondary text-black" : "text-white"
          }`}
        >
          <BarChartOutlined className="text-xl" />
          Dashboard
        </Link>
        <Link
          to={"/dashboard/new-notes"}
          className={`sider-link ${
            currentTab == "campaign" ? "bg-secondary text-black" : "text-white"
          }`}
        >
          <FlagOutlined className="text-xl" /> On Going Campaigns
        </Link>
        <Link
          to={"/dashboard/all-notes"}
          className={`sider-link ${
            currentTab == "My Donations"
              ? "bg-secondary text-black"
              : "text-white"
          }`}
        >
          <FileOutlined className="text-xl" /> 
        </Link>
      </div>
    </div>
  );
};

export default Sider;
