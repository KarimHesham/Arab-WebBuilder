import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/arab-logo.png";

const NavbarDemo = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div
        className="flex space-x-2 lg:space-x-6 items-center justify-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="arab logo"
          className="w-[90px] h-[45px] object-contain"
        />
      </div>
    </nav>
  );
};

export default NavbarDemo;
