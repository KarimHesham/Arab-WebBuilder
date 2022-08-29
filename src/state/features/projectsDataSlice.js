import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  activeProject: null,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setUserProjects: (state, action) => {
      state.projects = action.payload;
    },
    setActiveProject: (state, action) => {
      state.activeProject = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserProjects, setActiveProject } = projectsSlice.actions;

export default projectsSlice.reducer;
