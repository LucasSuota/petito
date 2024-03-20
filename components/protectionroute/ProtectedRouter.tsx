"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import { useContext } from "react";

const ProtectedRouter = ({ children }: { children: ReactNode }) => {
  const context = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser == null || auth.currentUser.emailVerified == false) {
      router.push("/login");
    }
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
