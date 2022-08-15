import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Page = ({ id, name }) => {
  return (
    <li className="flex items-center justify-between shadow-sm px-4 py-2 hover:scale-105 hover:bg-slate-100">
      {name}
      <div className="flex items-center">
        <button>
          <EditIcon className="scale-75 text-blue-600 hover:scale-100" />
        </button>
        <button>
          <DeleteIcon className="scale-75 text-red-500 hover:scale-100" />
        </button>
      </div>
    </li>
  );
};

export default Page;
