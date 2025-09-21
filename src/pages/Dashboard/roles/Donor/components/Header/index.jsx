import React from "react";
import { BarsOutlined } from "@ant-design/icons";
import { useTabContext } from "../../../../../../contexts/Tab/TabContext";
const Header = () => {
  const { setSiderOpen } = useTabContext();
  return (
    <div className="bg-bar text-white">
      <div className="flex items-center justify-between">
        <div>
          <button
            className="btn-secondary px-5 !py-3 m-1"
            onClick={() => setSiderOpen(true)}
          >
            <BarsOutlined />
          </button>
        </div>
        <div>
          <h2 className="text-2xl py-2"> Donor's Dashboard</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
