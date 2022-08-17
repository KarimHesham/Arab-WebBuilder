import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: [],
};

export const userPagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    addPage: (state, action) => {
      state.pages.push(action.payload);
    },
    removePage: (state, action) => {
      const newPages = state.pages.filter((page) => page.id === action.payload);
      state.pages = newPages;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPage, removePage, setPages } = userPagesSlice.actions;

export default userPagesSlice.reducer;
