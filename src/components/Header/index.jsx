import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, user, handleLogout } = useAuthContext();
  return (
    <div className="bg-bar p-3 text-white">
      <div className="flex justify-between w-[95%] mx-auto">
        <div className="text-2xl font-semibold flex justify-center items-center">Donors Hub</div>
        <div className=" flex justify-center items-center ">
          <div className="hidden md:block">
            <ul className="flex justify-center items-center font-medium gap-4 ">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`md:hidden flex justify-center items-center text-xl transition-all duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuOutlined />
        </div>
        <div className="hidden md:flex justify-center items-center">
          {isAuth ? <button onClick={handleLogout} className="btn-danger px-3 ">Logout</button> : (
            <Link to="/auth/login" className="btn-primary px-5">
              Login
            </Link>
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className=" md:hidden pt-5">
          <li>
            <Link to="/" className="mob-link">
              Public
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="mob-link">
              Dashboard
            </Link>
          </li>
          {isAuth ? null : (
            <li>
              <Link to="/auth/login" className="mob-link">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
