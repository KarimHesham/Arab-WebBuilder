import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./features/userDataSlice";
import workspacesDataReducer from "./features/workspacesDataSlice";
import projectsDataReducer from "./features/projectsDataSlice";
import pagesDataReducer from "./features/pagesDataSlice";
import storage from "redux-persist/lib/storage";
// import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import thunk from "redux-thunk";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  userData: userDataReducer,
  workspacesData: workspacesDataReducer,
  projectsData: projectsDataReducer,
  pagesData: pagesDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
