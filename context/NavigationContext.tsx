"use client";

import {
  initialNavigationValue,
  navigationReducer,
} from "@/reducer/navigationReducer";
import { PageState } from "@/types/PageState";
import React, { createContext, useReducer } from "react";

export const NavigationMenuContext = createContext<{
  state: PageState;
  dispatch: React.Dispatch<any>;
}>({ state: { page: 0 }, dispatch: () => null });

export const NavigationContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    navigationReducer,
    initialNavigationValue
  );

  return (
    <NavigationMenuContext.Provider value={{ state, dispatch }}>
      {children}
    </NavigationMenuContext.Provider>
  );
};

export default NavigationContext;
