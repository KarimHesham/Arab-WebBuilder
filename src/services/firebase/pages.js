import {
  arrayUnion,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { projectsRef, pagesRef } from "./db";

const getPages = async (projectId) => {
  const pages = [];

  try {
    const q = query(
      pagesRef,
      where("projectId", "==", projectId),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      querySnapshot.forEach((doc) => {
        pages.push(doc.data());
      });
    }

    console.log(pages);
    return pages;
  } catch (err) {
    console.log(err);
  }
};

const addPage = async (page) => {
  try {
    const newPage = doc(pagesRef);
    await setDoc(newPage, {
      uid: newPage.id,
      ...page,
    }).then(async () => {
      const q = query(projectsRef, where("uid", "==", page.projectId));
      const result = await getDocs(q);
      if (result.docs.length > 0) {
        const projectDoc = doc(db, "projects", result.docs[0].id);
        updateDoc(projectDoc, {
          projects: arrayUnion({
            uid: newPage.id,
            name: page.name,
          }),
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const deletePage = async (id) => {
  try {
    await deleteDoc(doc(db, "pages", id)).then(() => {
      console.log("Page deleted successfully");
    });
  } catch (err) {
    console.log(err);
  }
};

export { addPage, getPages, deletePage };
