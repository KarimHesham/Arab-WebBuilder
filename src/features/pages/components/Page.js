import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Page = ({ id, name, created }) => {
  return (
    <div className="w-36 h-24 md:w-48 md:h-24 bg-white shadow-lg rounded-md px-2 py-1 m-1 flex flex-col justify-between hover:bg-slate-200 border border-gray-200">
      <h2 className="text-sm font-semibold text-center text-gray-600">
        {name}
      </h2>

      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">{created}</p>
        <div className="flex items-center justify-end space-x-1">
          <EditIcon className="text-blue-700 hover:scale-125" />
          <DeleteIcon className="text-red-500 hover:scale-125" />
        </div>
      </div>
    </div>
  );
};

export default Page;
