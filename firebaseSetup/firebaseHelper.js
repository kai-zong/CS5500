import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
  try {
    await addDoc(collection(db, collectionName), data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
