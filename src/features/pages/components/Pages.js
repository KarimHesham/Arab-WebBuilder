import { ChartBarIcon, PlusIcon } from "@heroicons/react/solid";
import React from "react";
import { Navbar, Sidebar } from "../../../components";
import Page from "./Page";

const Pages = () => {
  return (
    <>
      <Navbar />
      <div className="flex md:px-36 p-6">
        <Sidebar />

        <div className="mt-10 space-y-4 space-x-4 w-full">
          <div className="flex items-center justify-between md:pr-32">
            <div className="flex items-center space-x-1">
              <ChartBarIcon className="h-4" />
              <h2>Your pages</h2>
            </div>

            <div className="flex items-center w-24 h-8 text-sm bg-blue-600 rounded-md justify-center text-white hover:bg-blue-700 cursor-pointer font-semibold">
              <PlusIcon className="h-4" />
              <p>New</p>
            </div>
          </div>
          <Page />
        </div>
      </div>
    </>
  );
};

export default Pages;
