import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveWorkspace } from "../../state/features/workspacesDataSlice";

const Workspace = ({ id, name }) => {
  const activeUser = useSelector((state) => state.userData.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openWorkspace = () => {
    dispatch(setActiveWorkspace(id));
    navigate(`/${activeUser.username}/${name}`);
  };
  return (
    <div className="sidebar-item" onClick={() => openWorkspace()}>
      <div className="w-7 h-7 rounded-md bg-blue-600 text-white text-sm flex items-center justify-center font-semibold">
        <p>{name.charAt(0).toUpperCase()}</p>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Workspace;
