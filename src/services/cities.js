import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getCities(uid) {
  try {
    const querySnapshot = await getDocs(collection(db, "users", uid, "cities"));

    const cities = querySnapshot.docs.map((doc) => {
      const docData = doc.data();
      return { id: doc.id, ...docData };
    });

    return cities;
  } catch (err) {
    console.error("Error fetching cities: ", err);
    throw new Error("Couldn't load cities");
  }
}

export async function getCity(uid, id) {
  try {
    const docRef = doc(db, "users", uid, "cities", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const cityData = docSnap.data();
      return { id: docSnap.id, ...cityData };
    } else {
      throw new Error("No such city!");
    }
  } catch (err) {
    console.error("Error fetching city:", err);

    if (err.message === "No such city!") {
      throw new Error("City not found.");
    } else {
      // Handle network issues or other unexpected errors
      throw new Error(
        "Couldn't load the city. Please check your internet connection and try again."
      );
    }
  }
}

export async function addCity(uid, newCity) {
  try {
    const date = Timestamp.fromDate(newCity.date);
    const cityData = { ...newCity, date };
    const docRef = await addDoc(
      collection(db, "users", uid, "cities"),
      cityData
    );

    return { id: docRef.id, ...cityData };
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't add city. Check your network and try again");
  }
}

export async function deleteCity(uid, cityId) {
  try {
    await deleteDoc(doc(db, "users", uid, "cities", cityId));
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't delete city.");
  }
}
