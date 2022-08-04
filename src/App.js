import { Editor } from "./features/editor/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Workspaces } from "./features/workspaces";
import { Workspace } from "./features/workspace";
import Pages from "./features/pages/components/Pages";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Editor />} />
        <Route path="/workspaces" element={<Workspaces />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </Router>
  );
}

export default App;
