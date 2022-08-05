import { ChartSquareBarIcon } from "@heroicons/react/outline";
import React from "react";
import Board from "../../../components/Project";

const Workspace = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between md:space-x-16 space-y-2">
        <div className="flex items-center justify-start space-x-1">
          <ChartSquareBarIcon className="h-8" />
          <h2 className="font-bold">Workspace Name</h2>
        </div>
        <div className="flex items-center flex-wrap">
          <div className="workspace-button">
            <ChartSquareBarIcon className="h-4" />
            <p>Button</p>
          </div>
          <div className="workspace-button">
            <ChartSquareBarIcon className="h-4" />
            <p>Button</p>
          </div>
          <div className="workspace-button">
            <ChartSquareBarIcon className="h-4" />
            <p>Button</p>
          </div>
          <div className="workspace-button">
            <ChartSquareBarIcon className="h-4" />
            <p>Button</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <Board />
        <Board />
        <Board />
        <Board />
      </div>
    </div>
  );
};

export default Workspace;
