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
          pages: arrayUnion({
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

const getPage = async (id) => {
  try {
    const docRef = doc(db, "pages", id);

    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      console.log(docSnapshot.data());
      return docSnapshot.data();
    }
  } catch (err) {
    console.log(err);
  }
};

const deletePage = async (id, name, projectId) => {
  try {
    await deleteDoc(doc(db, "pages", id)).then(async () => {
      const q = query(projectsRef, where("uid", "==", projectId));
      const result = await getDocs(q);
      if (result.docs.length > 0) {
        const projectDoc = doc(db, "projects", result.docs[0].id);
        updateDoc(projectDoc, {
          pages: arrayRemove({
            uid: id,
            name: name,
          }),
        });
      }
      console.log("Page deleted successfully");
    });
  } catch (err) {
    console.log(err);
  }
};

export { addPage, getPages, deletePage, getPage };
