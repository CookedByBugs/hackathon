import React from "react";
import { BarsOutlined, UserOutlined } from "@ant-design/icons";
import { useTabContext } from "../../../../../../contexts/Tab/TabContext";
import { useAuthContext } from "../../../../../../contexts/Auth/AuthContext";

const Header = () => {
  const { handleLogout } = useAuthContext();
  const { setSiderOpen } = useTabContext();

  return (
    <header className="bg-bar fixed left-0 right-0 top-0 text-white shadow-md z-10">
      <div className="flex w-[95%] mx-auto items-center justify-between py-3">
        {/* Left: Menu Button */}
        <button
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 transition"
          onClick={() => setSiderOpen(true)}
        >
          <BarsOutlined />
          <span className="hidden md:inline">Menu</span>
        </button>

        {/* Center: Title */}
        <h2 className="text-xl md:text-2xl font-bold tracking-wide">
          Donor&apos;s Dashboard
        </h2>

        {/* Right: User + Logout */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
            <UserOutlined className="text-lg" />
            <span className="hidden sm:inline text-sm font-medium">Donor</span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
