import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  workspaces: null,
  projects: null,
};

export const userPagesSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    getUser: (state) => {
      return state.user;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, getUser } = userPagesSlice.actions;

export default userPagesSlice.reducer;
