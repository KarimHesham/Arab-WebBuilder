import { Editor } from "./features/editor/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import { Workspaces } from "./features/workspaces";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/demo" element={<Editor />} />
        <Route path="/workspaces" element={<Workspaces />} />
      </Routes>
    </Router>
  );
}

export default App;
