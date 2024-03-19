import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full bg-white">
      <div className="max-w-screen-lg mx-auto py-4 px-8 flex flex-row items-center justify-between">
        <div className="relative sm:w-[100px] sm:h-[50px] w-[70px] h-[40px]">
          <Image src={"/svgs/petito-logo.svg"} fill alt="logo" />
        </div>
        <div>
          <ul className="flex flex-row items-center justify-end sm:gap-10 gap-4">
            <Link href={"/login"}>
              <li className="bg-primaryblue px-4 py-2 sm:px-6 sm:py-4 rounded-sm hover:bg-secondaryblue active:bg-black text-white cursor-pointer transition-all">
                Entrar
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
