import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./features/userDataSlice";
import workspaceDataReducer from "./features/workspacesDataSlice";

export default configureStore({
  reducer: {
    userData: userDataReducer,
    workspaceData: workspaceDataReducer,
  },
});
