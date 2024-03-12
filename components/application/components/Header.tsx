"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import React, { useContext } from "react";

const Header = () => {
  const context = useContext(UserContext);

  return (
    <header className="w-full bg-white mx-auto flex items-center justify-between px-6 py-4">
      <h1 className="text-2xl font-bold">Petito!</h1>
      <p>{context.state.user?.email}</p>
    </header>
  );
};

export default Header;
