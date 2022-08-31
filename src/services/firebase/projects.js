import {
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { projectsRef, workspacesRef } from "./db";

const getProjects = async (workspaceId) => {
  const projects = [];

  try {
    const q = query(
      projectsRef,
      where("workspaceId", "==", workspaceId),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      querySnapshot.forEach((doc) => {
        projects.push(doc.data());
      });
    }

    console.log(projects);
    return projects;
  } catch (err) {
    console.log(err);
  }
};
const getProject = async (id) => {
  try {
    const docRef = doc(db, "projects", id);

    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      console.log(docSnapshot.data());
      return docSnapshot.data();
    }
  } catch (err) {
    console.log(err);
  }
};

const addProject = async (project) => {
  try {
    const newProject = doc(projectsRef);
    await setDoc(newProject, {
      uid: newProject.id,
      ...project,
      pages: [],
    }).then(async () => {
      const q = query(workspacesRef, where("uid", "==", project.workspaceId));
      const result = await getDocs(q);
      if (result.docs.length > 0) {
        const workspaceDoc = doc(db, "workspaces", result.docs[0].id);
        updateDoc(workspaceDoc, {
          projects: arrayUnion({
            uid: newProject.id,
            name: project.name,
          }),
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteProject = async (id, name, workspaceId) => {
  try {
    await deleteDoc(doc(db, "projects", id)).then(async () => {
      const q = query(workspacesRef, where("uid", "==", workspaceId));
      const result = await getDocs(q);
      if (result.docs.length > 0) {
        const workspaceDoc = doc(db, "workspaces", result.docs[0].id);
        updateDoc(workspaceDoc, {
          projects: arrayRemove({
            uid: id,
            name: name,
          }),
        });
      }
      console.log("Project deleted");
    });
  } catch (err) {
    console.log(err);
  }
};

export { addProject, getProjects, deleteProject, getProject };
