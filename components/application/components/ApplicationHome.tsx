"use client";

import { NavigationMenuContext } from "@/context/NavigationContext";
import React from "react";
import { useContext } from "react";
import DisplayAnimalsScreen from "./screens/DisplayAnimalsScreen";
import MyProfile from "./screens/MyProfile";
import AddAnimalsScreen from "./screens/AddAnimalsScreen";

const ApplicationHome = () => {
  const navigationContext = useContext(NavigationMenuContext);

  if (navigationContext.state.page === 0) return <DisplayAnimalsScreen />;
  if (navigationContext.state.page === 1) return <AddAnimalsScreen />;
  if (navigationContext.state.page === 2) return <MyProfile />;
};

export default ApplicationHome;
