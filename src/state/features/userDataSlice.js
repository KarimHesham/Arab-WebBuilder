import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userPagesSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
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
