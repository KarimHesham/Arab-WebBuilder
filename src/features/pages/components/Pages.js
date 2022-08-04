import { ChartBarIcon } from "@heroicons/react/solid";
import React from "react";
import { Navbar, Sidebar } from "../../../components";
import Page from "./Page";

const Pages = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="mt-10 space-y-4 space-x-4">
          <div className="flex items-center">
            <ChartBarIcon className="h-4" />
            <h2>Your pages</h2>
          </div>
          <Page />
        </div>
      </div>
    </>
  );
};

export default Pages;
