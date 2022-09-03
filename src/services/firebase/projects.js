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
  writeBatch,
} from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { pagesRef, projectsRef, workspacesRef } from "./db";

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
    await deleteDoc(doc(db, "projects", id))
      .then(async () => {
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
      })
      .then(async () => {
        const batch = writeBatch(db);

        const pagesQuery = query(pagesRef, where("projectId", "==", id));

        const pagesSnapshot = await getDocs(pagesQuery);

        pagesSnapshot.forEach((doc) => {
          batch.delete(doc.ref);
        });

        return batch.commit();
      });
  } catch (err) {
    console.log(err);
  }
};

export { addProject, getProjects, deleteProject, getProject };
