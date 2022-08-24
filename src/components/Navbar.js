import React from "react";
// import Dropdown from "./Dropdown";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logout } from "../services/firebase/auth";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const navigate = useNavigate();

  const SignOut = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="flex space-x-2 lg:space-x-6 items-center justify-center">
        <img
          src="http://arabcode.ae/images/arab-logo.png"
          alt=""
          className="h-8"
        />

        <div className="hidden sm:flex items-center justify-center space-x-10">
          {/* <Dropdown />
          <Dropdown />
          <Dropdown /> */}
        </div>

        {/* <div className="sm:hidden">
          <Dropdown />
        </div> */}
      </div>

      <div className="flex items-center justify-center space-x-2 lg:space-x-6">
        {/* <div className="sm:flex items-center rounded-md border sm:bg-white p-2 space-x-1">
          <input
            className="hidden sm:flex h-full rounded-sm focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <SearchIcon className="h-4" />
        </div>

        <NotificationsNoneIcon className="navbar-button" /> */}

        <LogoutIcon className="navbar-button" onClick={() => SignOut()} />
      </div>
    </nav>
  );
};

export default Navbar;
