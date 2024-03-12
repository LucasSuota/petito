"use client";

import ProtectedRouter from "@/components/protectionroute/ProtectedRouter";
import { UserContext } from "@/context/FirebaseAuthContext";

import PagesTransition from "@/transition/PagesTransition";
import { useContext } from "react";

const Home = () => {
  const context = useContext(UserContext);

  return (
    <PagesTransition>
      <ProtectedRouter>
        <div className="w-full h-dvh flex flex-col items-center justify-center">
          <h1>Seja bem vindo!</h1>
          <p>{context.state.user?.email}</p>
        </div>
      </ProtectedRouter>
    </PagesTransition>
  );
};

export default Home;
