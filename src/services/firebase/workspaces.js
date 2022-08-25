import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { usersRef, workspacesRef } from "./db";

const addWorkspace = async (workspace) => {
  try {
    await addDoc(collection(workspacesRef), {
      uid: workspace.uid,
      name: workspace.name,
      projects: workspace.projects,
    }).then(async () => {
      await updateDoc(usersRef, {
        workspaces: arrayUnion(new Map().set(workspace.uid, workspace.name)),
      });
    });
  } catch (err) {
    console.log(err);
  }
};
