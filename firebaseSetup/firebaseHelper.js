import { addDoc, collection, deleteDoc, doc, setDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
  try {
    await addDoc(collection(db, collectionName), data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function deleteFromDB(docId, collectionName) {
  // delete doc from collection
  try {
    await deleteDoc(doc(db, collectionName, docId));
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}

export async function setDocInDB(data, docId, collectionName) {
  try {
    await setDoc(doc(db, collectionName, docId), data, { merge: true });
  } catch (e) {
    console.error("Error setting document: ", e);
  }
}

export async function readAllDocs (collectionName){
  try{
    const querySnapshot = await getDocs(collection(db, collectionName));
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
        });
    return data;
  }
  catch(e){
    console.error("Error reading documents: ", e);
  }
}