import { Editor } from "./features/editor/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Workspaces } from "./features/workspaces";
import { Project } from "./features/projects";
import Pages from "./features/pages/components/Pages";
import Home from "./components/Home";
import Landing from "./features/landing/components/Landing";
import { Login, Register, Reset } from "./features/userProfile/index";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/demo" element={<Editor />} />
        <Route
          path="/:userame/:workspaceName/:projectName/:pageName"
          element={<Editor />}
        />
        <Route path="/:username/workspaces" element={<Workspaces />} />
        <Route path="/:username/:workspaceName" element={<Project />} />
        <Route
          path="/:username/:workspaceName/:projectName"
          element={<Pages />}
        />
      </Routes>
    </Router>
  );
}

export default App;
