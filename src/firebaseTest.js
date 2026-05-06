import { db } from "./firebase/config";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";

export async function testFirestore() {
  try {
    const docRef = await addDoc(collection(db, "testCollection"), {
      name: "Firebase Test",
      createdAt: serverTimestamp(),
    });

    console.log("✅ Document written with ID:", docRef.id);

    const querySnapshot = await getDocs(collection(db, "testCollection"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });

  } catch (e) {
    console.error("❌ Error:", e);
  }
}