"use client";

import { auth } from "@/firebase/firebase";
import { firebaseReducer, initialValue } from "@/reducer/firebaseReducer";
import { FormsLoadingType } from "@/types/FormsLoadingType";
import { User, onAuthStateChanged } from "firebase/auth";
import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const UserContext = createContext<{
  state: FormsLoadingType;
  dispatch: React.Dispatch<any>;
}>({
  state: {
    user: null,
    isInitiallyLoading: true,
    isLoading: false,
    isRegistered: false,
  },
  dispatch: () => null,
});

const FirebaseAuthContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(firebaseReducer, initialValue);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          payload: {
            user: user,
          },
        });
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
