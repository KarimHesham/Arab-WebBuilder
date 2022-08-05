import { ChartBarIcon } from "@heroicons/react/outline";
import React from "react";
import { Board, Navbar, Sidebar } from "../../../components";

const Workspace = () => {
  return (
    <div>
      <Navbar />
      <div className="flex px-4 md:px-36">
        <Sidebar />

        <div className="mt-10 space-y-4">
          <div className="flex space-x-1 items-center justify-start">
            <ChartBarIcon className="h-4" />
            <h2 className="font-bold text-gray-600">Your boards</h2>
          </div>
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
