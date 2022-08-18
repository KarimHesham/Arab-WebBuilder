import { configureStore } from "@reduxjs/toolkit";
import userPagesReducer from "./features/pages/userPagesSlice";
import userDataReducer from "./features/userDataSlice";

export default configureStore({
  reducer: {
    userData: userDataReducer,
    userPages: userPagesReducer,
  },
});
