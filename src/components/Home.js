import React from "react";

const Home = () => {
  return (
    <div className="flex text-blue-400 items-center justify-center m-auto h-screen text-xl">
      <div className="flex items-center justify-center flex-col w-1/2 p-2 h-1/2 border-slate-800 border rounded-md space-y-3 shadow-lg">
        <a href="/home">Landing</a>
        <a href="/demo">Editor</a>
        <a href="/workspaces">Workspaces</a>
        <a href="/workspace">Workspace</a>
        <a href="/pages">Pages</a>
      </div>
    </div>
  );
};

export default Home;
