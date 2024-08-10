import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getCities() {
  const querySnapshot = await getDocs(collection(db, "cities"));

  const cities = querySnapshot.docs.map((doc) => {
    const docData = doc.data();
    return { id: doc.id, ...docData };
  });

  return cities;
}

export async function getCity(id) {
  const docRef = doc(db, "cities", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const cityData = docSnap.data();

    return { id: docSnap.id, ...cityData };
  } else {
    // docSnap.data() will be undefined in this case
    throw new Error("No such city!");
  }
}
