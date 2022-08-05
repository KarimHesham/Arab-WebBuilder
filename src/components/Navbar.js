import React from "react";
import { BellIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/outline";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex space-x-2 lg:space-x-6 items-center justify-center">
        <img
          src="http://arabcode.ae/images/arab-logo.png"
          alt=""
          className="h-8"
        />

        <div className="hidden sm:flex items-center justify-center space-x-10">
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>

        <div className="sm:hidden">
          <Dropdown />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2 lg:space-x-6">
        <div className="sm:flex items-center rounded-md border sm:bg-white p-2 space-x-1">
          <SearchIcon className="h-4" />

          <input
            className="hidden sm:flex h-full rounded-sm focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>

        <BellIcon className="navbar-button" />

        <UserCircleIcon className="navbar-button" />
      </div>
    </nav>
  );
};

export default Navbar;
