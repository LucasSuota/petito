"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full bg-white">
      <div className="max-w-screen-lg mx-auto py-4 px-8 flex flex-row items-center justify-between">
        <div className="relative sm:w-[100px] sm:h-[50px] w-[70px] h-[40px]">
          <Image src={"/svgs/petito-logo.svg"} fill alt="logo" />
        </div>
        <div></div>
        <nav>
          <Link href={"/login"}>
            <button className="h-[50px] bg-primaryblue hover:bg-secondaryblue active:black px-10 rounded-md text-white transition-all">
              Login
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
