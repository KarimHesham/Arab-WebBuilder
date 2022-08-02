import { ChartSquareBarIcon } from "@heroicons/react/outline";
import React from "react";
import Board from "../../../components/Board";

const Workspace = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-16 space-y-2">
        <div className="flex items-center space-x-2">
          <ChartSquareBarIcon className="h-8" />
          <h2 className="font-bold">Workspace Name</h2>
        </div>
        <div className="flex items-center space-x-2 flex-wrap">
          <div className="flex items-center bg-gray-100 px-4 py-1 rounded-sm text-sm hover:bg-gray-300">
            <ChartSquareBarIcon className="h-4" />
            <p>Button</p>
          </div>
          <div className="flex items-center bg-gray-100 px-4 py-1 rounded-sm text-sm hover:bg-gray-300">
            <ChartSquareBarIcon className="h-4" />
            <p>Button</p>
          </div>
          {/* <div className="flex items-center bg-gray-100 px-4 py-1 rounded-sm text-sm hover:bg-gray-300">
            <ChartSquareBarIcon className="h-4" />
            <p>Button</p>
          </div>
          <div className="flex items-center bg-gray-100 px-4 py-1 rounded-sm text-sm hover:bg-gray-300">
            <ChartSquareBarIcon className="h-4" />
            <p>Button</p>
          </div> */}
        </div>
      </div>
      <Board />
    </div>
  );
};

export default Workspace;
