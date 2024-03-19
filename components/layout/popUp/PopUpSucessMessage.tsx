"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";

const animationTimeline = gsap.timeline({ paused: true });
export const playSuccessPopUp = () => {
  animationTimeline.restart();
};

const PopUpSuccessMessage = () => {
  const context = useContext(UserContext);

  useGSAP(() => {
    animationTimeline.set(".popup", { opacity: 0, y: -200 });
    animationTimeline.from(".popup", { opacity: 0, y: -200, delay: 1 });
    animationTimeline.to(".popup", {
      opacity: 1,
      y: 0,
      ease: "back",
      duration: 1,
    });
    animationTimeline.to(".popup", {
      opacity: 0,
      y: -150,
      ease: "back",
      duration: 0.3,
      delay: 2,
    });
  });

  return (
    <>
      <div className="popup absolute left-2/4 translate-x-[-50%] w-[90%] sm:w-2/4 mt-4 bg-green-500 p-4 text-center rounded-sm shadow-xl">
        <p className="text-white">Sucesso</p>
      </div>
    </>
  );
};

export default PopUpSuccessMessage;
