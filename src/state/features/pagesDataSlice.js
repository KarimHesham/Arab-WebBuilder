import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: [],
  activePage: null,
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setUserPages: (state, action) => {
      state.pages = action.payload;
    },
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserPages, setActivePage } = pagesSlice.actions;

export default pagesSlice.reducer;
