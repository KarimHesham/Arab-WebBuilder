import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";

const Page = () => {
  return (
    <li className="flex items-center justify-between shadow-sm px-4 py-2 hover:scale-105 hover:bg-slate-100">
      Page1
      <div className="flex items-center">
        <PencilIcon className="h-5 text-blue-600 hover:scale-125" />
        <TrashIcon className="h-5 text-red-500 hover:scale-125" />
      </div>
    </li>
  );
};

export default Page;
