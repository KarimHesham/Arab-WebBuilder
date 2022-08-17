import { configureStore } from "@reduxjs/toolkit";
import userPagesReducer from "./features/pages/userPagesSlice";

export default configureStore({
  reducer: {
    userPages: userPagesReducer,
  },
});
