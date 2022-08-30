import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./features/userDataSlice";
import workspacesDataReducer from "./features/workspacesDataSlice";
import projectsDataReducer from "./features/projectsDataSlice";
import pagesDataReducer from "./features/pagesDataSlice";

export default configureStore({
  reducer: {
    userData: userDataReducer,
    workspacesData: workspacesDataReducer,
    projectsData: projectsDataReducer,
    pagesData: pagesDataReducer,
  },
});
