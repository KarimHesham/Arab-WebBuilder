import { ChartSquareBarIcon } from "@heroicons/react/outline";
import { EyeIcon, PlusIcon } from "@heroicons/react/solid";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sm:flex flex-col hidden">
      <div className="w-60 mt-10 px-4 text-sm">
        <div className="flex items-center justify-start hover:bg-slate-200 py-1 text-left space-x-1 pl-4 cursor-pointer rounded-sm">
          <EyeIcon className="h-4" />
          <p>Projects</p>
        </div>
        <div className="flex items-center justify-start hover:bg-slate-200 py-1 space-x-1 pl-4 cursor-pointer rounded-sm">
          <EyeIcon className="h-4" />
          <p>Projects</p>
        </div>
        <div className="flex items-center justify-start hover:bg-slate-200 py-1 space-x-1 pl-4 cursor-pointer rounded-sm">
          <EyeIcon className="h-4" />
          <p>Home</p>
        </div>
      </div>

      <div className="w-60 mt-4 px-4 space-y-2">
        <div className="flex items-center pl-2 justify-between">
          <h2 className="text-sm">Workspaces</h2>
          <div className="hover:bg-slate-200 p-1">
            <PlusIcon className="h-4 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm font-bold hover:bg-slate-200 px-1 py-2 rounded-sm">
          <div className="flex items-center justify-start space-x-1">
            <ChartSquareBarIcon className="h-6" />
            <p>Workspace Name</p>
          </div>
          <div className="p-1 cursor-pointer hover:bg-slate-200 ">
            {/* <ChevronDownIcon className="h-4" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
