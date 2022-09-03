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
  arrayRemove,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { pagesRef, projectsRef, usersRef, workspacesRef } from "./db";

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
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length > 0) {
        const userDoc = doc(db, "users", querySnapshot.docs[0].id);
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

const deleteWorkspace = async (id, name, username) => {
  try {
    await deleteDoc(doc(db, "workspaces", id))
      .then(async () => {
        const q = query(usersRef, where("username", "==", username));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs.length > 0) {
          const userDoc = doc(db, "users", querySnapshot.docs[0].id);
          updateDoc(userDoc, {
            workspaces: arrayRemove({
              uid: id,
              name: name,
            }),
          });
        }
      })
      .then(async () => {
        const batch = writeBatch(db);

        const projectsQuery = query(
          projectsRef,
          where("workspaceId", "==", id)
        );
        const pagesQuery = query(pagesRef, where("workspaceId", "==", id));

        const projectsSnapshot = await getDocs(projectsQuery);
        const pagesSnapshot = await getDocs(pagesQuery);

        projectsSnapshot.forEach((doc) => {
          batch.delete(doc.ref);
        });
        pagesSnapshot.forEach((doc) => {
          batch.delete(doc.ref);
        });

        return batch.commit();
      });
  } catch (err) {
    console.log(err);
  }
};

export { addWorkspace, getWorkspaces, deleteWorkspace };
