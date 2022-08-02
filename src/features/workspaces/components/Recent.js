import { ClockIcon } from "@heroicons/react/outline";
import React from "react";
import Board from "../../../components/Board";

const Recent = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <ClockIcon className="h-6" />
        <h2 className="font-bold">Recently viewed</h2>
      </div>

      <Board />
    </div>
  );
};

export default Recent;
