"use client";

import {
  initialLoadingReducerState,
  loadingReducer,
} from "@/reducer/loadingReducer";
import { LoadingReducerStateType } from "@/types/LoadingReducerStateType";
import React, { ReactNode, createContext, useReducer } from "react";

export const LoadContext = createContext<{
  state: LoadingReducerStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialLoadingReducerState,
  dispatch: () => null,
});

const LoadingContext = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    loadingReducer,
    initialLoadingReducerState
  );
  return (
    <LoadContext.Provider value={{ state, dispatch }}>
      {children}
    </LoadContext.Provider>
  );
};

export default LoadingContext;
