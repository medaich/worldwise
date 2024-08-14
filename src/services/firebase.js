import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyD9AVYQCg9e1BItPLBnYj5WudzFC6Gv4iQ",

  authDomain: "worldwise-5dd21.firebaseapp.com",

  projectId: "worldwise-5dd21",

  storageBucket: "worldwise-5dd21.appspot.com",

  messagingSenderId: "958650719961",

  appId: "1:958650719961:web:f7eb96d7f72e8b1db528c8",
});

export const db = getFirestore(app);
export const auth = getAuth(app);
