import { Demo, Editor } from "./features/editor/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Workspaces } from "./features/workspaces";
import { Project } from "./features/projects";
import Pages from "./features/pages/components/Pages";
import { Landing } from "./features/landing";
import { Login, Register, Reset } from "./features/userProfile/index";
import Test from "./features/test/Test";
import Docs from './features/docs/components/Docs';
import { Intro, Overview } from './features/docs/content';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/docs" element={<Docs />}>
          <Route index element={<Intro />} />
          <Route path="intro" element={<Intro />} />
          <Route path="overview" element={<Overview />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/:username/workspaces" element={<Workspaces />} />
        <Route path="/:username/:workspaceName" element={<Project />} />
        <Route
          path="/:username/:workspaceName/:projectName"
          element={<Pages />}
        />
        <Route
          path="/:userame/:workspaceName/:projectName/:pageName"
          element={<Editor />}
        />

        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
