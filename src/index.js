import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./state/store";
import "./index.css";
import "./components/styles/styles.css";
import "grapesjs/dist/css/grapes.min.css";
import "./features/editor/styles/editor.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
