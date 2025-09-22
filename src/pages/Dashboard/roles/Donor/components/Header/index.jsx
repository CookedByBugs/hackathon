import React from "react";
import { BarsOutlined } from "@ant-design/icons";
import { useTabContext } from "../../../../../../contexts/Tab/TabContext";
const Header = () => {
  const { setSiderOpen } = useTabContext();
  return (
    <div className="bg-bar fixed left-0 right-0 top-0 text-white">
      <div className="flex w-[99%] items-center justify-between">
        <div>
          <button
            className="btn-secondary px-5 !py-3 m-1"
            onClick={() => setSiderOpen(true)}
          >
            <BarsOutlined />
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold py-2"> Donor's Dashboard</h2>
        </div>
        <div>
          <button className="btn-danger !px-4 !py-2">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
