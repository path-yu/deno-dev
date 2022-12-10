import { initializeApp } from "https://cdn.skypack.dev/firebase@9.15.0/app";
import { getStorage } from "https://cdn.skypack.dev/firebase@9.15.0/storage";
import { getAuth } from "https://cdn.skypack.dev/firebase@9.15.0/auth";
import {
  doc,
  getFirestore,
  updateDoc,
} from "https://cdn.skypack.dev/firebase@9.15.0/firestore";
import { USERS } from "./constant.ts";

const firebaseConfig = {
  apiKey: "AIzaSyBCRj-pzeE_5XpdGdn4L-IBI04C4wUfHRE",
  authDomain: "chat-fe875.firebaseapp.com",
  projectId: "chat-fe875",
  storageBucket: "chat-fe875.appspot.com",
  messagingSenderId: "928535285999",
  appId: "1:928535285999:web:2f28da0d0a3cb167010b1a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Create a root reference
export const storage = getStorage(app);

export const updateUserData = (data: StoreUser, uid: string) => {
  updateDoc(doc(db, USERS, uid), data);
};
export interface StoreUser {
  displayName?: string;
  email?: string;
  photoURl?: string;
  suggest?: string;
  createTime?: number;
  contacts?: string[];
  lastLoginTime?: number;
  online?: boolean;
  [key: string]: any;
}
