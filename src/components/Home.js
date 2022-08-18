import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../state/features/userDataSlice";
import { NavLink } from "react-router-dom";

const test = require("../data/test.json");

const Home = () => {
  const user = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) dispatch(setUser(test));

    console.log(user);
  }, [dispatch, user]);

  return (
    <div className="flex text-blue-400 items-center justify-center m-auto h-screen text-xl">
      <div className="flex items-center justify-center flex-col w-1/2 p-2 h-1/2 border  border-slate-400 rounded-md space-y-3 shadow-lg">
        <NavLink to="/home">Landing</NavLink>
        <NavLink to="/demo">Editor</NavLink>
        <NavLink to="/workspaces">Workspaces</NavLink>
        <NavLink to="/project">Workspace</NavLink>
        <NavLink to="/pages">Project</NavLink>
      </div>
    </div>
  );
};

export default Home;
