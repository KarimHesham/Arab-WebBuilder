import React from "react";
import "../styles/navbar.css";
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

        {/* <p className="hidden sm:flex items-center">
          Workspaces <ChevronDownIcon className="h-4" />
        </p> */}
        {/* <p className="hidden sm:flex">Recent</p>
        <p className="hidden sm:flex">Starred</p>
        <button className="hover:bg-white">Create</button> */}
      </div>

      <div className="flex items-center justify-center space-x-2 lg:space-x-6">
        <div className="sm:flex items-center rounded-sm bg-slate-300 sm:bg-white p-2 space-x-1">
          <SearchIcon className="h-4" />

          <input
            className="hidden sm:flex h-full rounded-sm focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>

        <BellIcon className="h-6 cursor-pointer hover:bg-white" />

        <UserCircleIcon className="h-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
