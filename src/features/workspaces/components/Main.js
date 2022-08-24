import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import Recent from "./Recent";
import Workspace from "./Workspace";

const Main = () => {
  const user = useSelector((state) => state.userData.user);
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    // setWorkspaces(user.workspaces);
    console.log(workspaces);
  }, [user.workspaces]);

  return (
    <div className="mt-10 px-4">
      {/* <Recent /> */}
      <div className="">
        <h2 className="text-gray-500 font-bold uppercase">Your Workspaces</h2>
        {workspaces.length > 0 ? (
          workspaces?.map((workspace) => {
            return (
              <Workspace
                key={workspace.id}
                name={workspace.name}
                projects={workspace.projects}
              />
            );
          })
        ) : (
          <span className="flex items-center justify-center">Create your first workspace</span>
        )}
      </div>
    </div>
  );
};

export default Main;
