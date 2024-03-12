"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import { useContext } from "react";

const ProtectedRouter = ({ children }: { children: ReactNode }) => {
  const context = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (context.state.user === null) router.push("/login");
      clearInterval(interval);
    }, 2000);
  });

  if (context.state.user != null) {
    return <>{children}</>;
  }
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <p className="font-bold text-lg">Usuário não está logado.</p>
        <p>redirecionando...</p>
      </div>
    </>
  );
};

export default ProtectedRouter;
