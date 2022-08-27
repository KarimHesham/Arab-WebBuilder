import {
  arrayUnion,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { usersRef, workspacesRef } from "./db";

const addWorkspace = async (workspace) => {
  try {
    const newWorkspace = doc(workspacesRef);
    await setDoc(newWorkspace, {
      uid: newWorkspace.id,
      ...workspace,
      projects: [],
      timestamp: serverTimestamp(),
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

const getWorkspaces = async (username) => {
  try {
    const q = query(
      workspacesRef,
      where("username", "==", username),
      orderBy("timestamp", "desc")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id);
    });
  } catch (err) {
    console.log(err);
  }
};

export { addWorkspace, getWorkspaces };
