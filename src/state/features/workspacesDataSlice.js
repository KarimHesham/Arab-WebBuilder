import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workspaces: [],
  activeWorkspace: null,
};

export const workspacesSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setWorkspaces: (state, action) => {
      state.workspaces = action.payload;
    },
    setActiveWorkspace: (state, action) => {
      state.activeWorkspace = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWorkspaces, setActiveWorkspace } = workspacesSlice.actions;

export default workspacesSlice.reducer;
