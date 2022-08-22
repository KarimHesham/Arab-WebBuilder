import { Editor } from "./features/editor/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Workspaces } from "./features/workspaces";
import { Project } from "./features/projects";
import Pages from "./features/pages/components/Pages";
import Home from "./components/Home";
import Landing from "./features/landing/components/Landing";
import "./index.css";
import { Login, Register } from "./features/userProfile/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/demo" element={<Editor />} />
        <Route path="/workspaces" element={<Workspaces />} />
        <Route path="/project" element={<Project />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </Router>
  );
}

export default App;
