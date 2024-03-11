"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useEffect } from "react";

const PopUpMessage = () => {
  const context = useContext(UserContext);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    tl.set(".popup", { opacity: 0, y: -200 });
    tl.from(".popup", { opacity: 0, y: -200, delay: 1 });
    tl.to(".popup", { opacity: 1, y: 0, ease: "back", duration: 1 });
    tl.to(".popup", {
      opacity: 0,
      y: -150,
      ease: "back",
      duration: 0.3,
      delay: 2,
    });
    if (
      context.state.isRegistering == true ||
      context.state.isLogging == true
    ) {
      tl.restart();
    }
  }, [context.state.isRegistering, context.state.isLogging]);

  return (
    <>
      {!context.state.isRegistered ? (
        <div className="popup absolute left-2/4 translate-x-[-50%] w-[90%] sm:w-2/4 mt-4 bg-red-500 p-4 text-center rounded-sm shadow-xl">
          <p className="text-white">Erro</p>
        </div>
      ) : (
        <div className="popup absolute left-2/4 translate-x-[-50%] w-[90%] sm:w-2/4 mt-4 bg-green-500 p-4 text-center rounded-sm shadow-xl">
          <p className="text-white">Sucesso</p>
        </div>
      )}
    </>
  );
};

export default PopUpMessage;
