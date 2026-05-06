import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";

export const useFirestore = (colName) => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const addDocument = async (docData) => {
    setIsPending(true);
    try {
      await addDoc(collection(db, colName), docData);
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  const deleteDocument = async (id) => {
    setIsPending(true);
    try {
      await deleteDoc(doc(db, colName, id));
      setIsPending(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { addDocument, deleteDocument, isPending, error };
};
