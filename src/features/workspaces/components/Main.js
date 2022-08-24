import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Recent from "./Recent";
import Workspace from "./Workspace";

const Main = () => {
  const user = useSelector((state) => state.userData.user);
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    setWorkspaces(user.workspaces);
    console.log(workspaces);
  }, [user.workspaces]);

  return (
    <div className="mt-10 px-4">
      <Recent />
      <div className="mt-10 space-y-4">
        <h2 className="text-gray-500 font-bold uppercase">Your Workspaces</h2>
        {workspaces?.map((workspace) => {
          return (
            <Workspace
              key={workspace.id}
              name={workspace.name}
              projects={workspace.projects}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
