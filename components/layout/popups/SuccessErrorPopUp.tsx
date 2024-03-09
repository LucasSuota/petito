"use client";

import { Alert } from "@mui/material";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/FirebaseAuthContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SuccessErrorPopUp = () => {
  const context = useContext(UserContext);

  const animation = gsap.timeline({ paused: true });

  const handleAnimation = async () => {
    await animation.play();
  };

  useGSAP(() => {
    animation.from(".popUpAlert", {
      opacity: 0,
      y: -150,
    });
    animation.to(".popUpAlert", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "back",
    });
    animation.to(".popUpAlert", { opacity: 1, y: 0, duration: 2 });
    animation.to(".popUpAlert", { opacity: 0, y: -150, duration: 0.3 });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleAnimation();
      clearInterval(interval);
    }, 4000);
  });

  return (
    <div className="popUpAlert">
      <Alert
        className="absolute sm:m-10 m-4 mx-auto top-0 left-[50%] sm:w-1/4 w-[90%] translate-x-[-50%] shadow-xl p-4"
        icon={
          context.state.isRegistered ? (
            <CheckCircleOutline fontSize="inherit" />
          ) : (
            <ErrorOutline fontSize="inherit" />
          )
        }
        severity={context.state.isRegistered ? "success" : "error"}
      >
        {context.state.isRegistered
          ? "Sua conta foi criada com sucesso"
          : "Houve um erro"}
      </Alert>
    </div>
  );
};

export default SuccessErrorPopUp;
