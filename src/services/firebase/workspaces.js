import {
  arrayUnion,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { usersRef, workspacesRef } from "./db";

const getWorkspaces = async (username) => {
  const workspaces = [];

  try {
    const q = query(
      workspacesRef,
      where("username", "==", username),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      querySnapshot.forEach((doc) => {
        workspaces.push(doc.data());
      });
    }

    console.log(workspaces);
    return workspaces;
  } catch (err) {
    console.log(err);
  }
};

const addWorkspace = async (workspace) => {
  try {
    const newWorkspace = doc(workspacesRef);
    await setDoc(newWorkspace, {
      uid: newWorkspace.id,
      ...workspace,
      projects: [],
    }).then(async () => {
      const q = query(usersRef, where("username", "==", workspace.username));
      const result = await getDocs(q);
      if (result.docs.length > 0) {
        const userDoc = doc(db, "users", result.docs[0].id);
        updateDoc(userDoc, {
          workspaces: arrayUnion({
            uid: newWorkspace.id,
            name: workspace.name,
          }),
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteWorkspace = async (id) => {
  try {
    await deleteDoc(doc(db, "workspaces", id)).then(() => {
      console.log("Workspaces deleted successfully");
    });
  } catch (err) {
    console.log(err);
  }
};

export { addWorkspace, getWorkspaces, deleteWorkspace };
