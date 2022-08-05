import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";

const Page = () => {
  return (
    <div className="w-36 h-24 md:w-48 md:h-24 bg-white shadow-lg rounded-md px-2 py-1 m-1 flex flex-col justify-between hover:bg-slate-200 border border-gray-200">
      <h2 className="text-sm font-semibold text-center text-gray-600">
        Page Name
      </h2>

      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">2 hrs ago</p>
        <div className="flex items-center justify-end space-x-1">
          <PencilIcon className="h-4 text-blue-700 hover:scale-125" />
          <TrashIcon className="h-4 text-red-500 hover:scale-125" />
        </div>
      </div>
    </div>
  );
};

export default Page;
