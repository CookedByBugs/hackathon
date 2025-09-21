import React from "react";
import { BarsOutlined } from "@ant-design/icons";
import { useTabContext } from "../../../../../../contexts/Tab/TabContext";
import { useAuthContext } from "../../../../../../contexts/Auth/AuthContext";
const Header = () => {
  const { setSiderOpen } = useTabContext();
  const { handleLogout } = useAuthContext();
  return (
    <div className="bg-bar text-white">
      <div className="max-w-[99%] mx-auto flex items-center justify-between">
        <div>
          <button
            className="ms-1 btn-secondary !px-3 !py-2 m-2"
            onClick={() => setSiderOpen(true)}
          >
            <BarsOutlined />
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold py-2"> NGO's Dashboard</h2>
        </div>
        <div>
          <button onClick={handleLogout} className="btn-danger px-5 !py-1.5">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
