import React from "react";

const Project = ({ id, name }) => {
  return (
    <div className="flex flex-col w-40 md:w-48 h-24 m-1 bg-white shadow-lg rounded-md p-3 border hover:bg-slate-100 bg-opacity-50 hover:backdrop:duration-100 hover:bg-opacity-100 cursor-pointer">
      <h2 className="font-bold">{name}</h2>
    </div>
  );
};

export default Project;
