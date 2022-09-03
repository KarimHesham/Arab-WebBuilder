import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/arab-logo.png";
import UserDropDown from "./UserDropDown";

const Navbar = () => {
  const activeUser = useSelector((state) => state.userData.user);

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div
        className="flex space-x-2 lg:space-x-6 items-center justify-center cursor-pointer"
        onClick={() => navigate(`/${activeUser.username}/workspaces`)}
      >
        <img
          src={logo}
          alt="arab logo"
          className="w-[90px] h-[45px] object-contain"
        />
      </div>

      <div className="flex items-center justify-center space-x-2 lg:space-x-6">
        <UserDropDown />
      </div>
    </nav>
  );
};

export default Navbar;
