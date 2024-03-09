"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { ReactNode } from "react";

const PagesTransition = ({ children }: { children: ReactNode }) => {
  useGSAP(() => {
    const pageTransition = gsap.timeline();
    pageTransition.from(".transition-page", { opacity: 0, delay: 1 });
    pageTransition.to(".transition-page", {
      opacity: 1,
      duration: 1,
      delay: 1,
    });
  });

  return <div className="transition-page">{children}</div>;
};

export default PagesTransition;
