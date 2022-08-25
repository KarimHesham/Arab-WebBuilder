import { collection } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";

const usersRef = collection(db, "users");
const workspacesRef = collection(db, "workspaces");
const projectsRef = collection(db, "projects");
const pagesRef = collection(db, "pages");

export { usersRef, workspacesRef, projectsRef, pagesRef };
