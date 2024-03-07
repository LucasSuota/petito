"use client";

import { auth, db } from "@/firebase/firebase";
import { firebaseReducer, initialValue } from "@/reducer/firebaseReducer";
import { UserType } from "@/types/UserType";
import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { ReactNode, createContext, useEffect, useReducer } from "react";

export const UserContext = createContext<{
  state: UserType;
  dispatch: React.Dispatch<any>;
}>({
  state: { user: null },
  dispatch: () => null,
});

const FirebaseAuthContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(firebaseReducer, initialValue);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = collection(db, "users");
        addDoc(docRef, { teste: "Lucas" });
        const docSnap = await getDocs(docRef);

        docSnap.forEach((doc) => console.log(doc.id, "=>", doc.data()));
      }
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default FirebaseAuthContext;
