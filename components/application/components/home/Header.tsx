import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full py-4 px-8 bg-primarycream flex flex-row items-center justify-between">
      <div className="relative sm:w-[100px] sm:h-[50px] w-[70px] h-[40px]">
        <Image src={"/svgs/petito-logo.svg"} fill alt="logo" />
      </div>
      <div>
        <ul className="flex flex-row items-center justify-end sm:gap-10 gap-4">
          <Link href={"/login"}>
            <li className="bg-primaryblue px-4 py-2 sm:px-6 sm:py-4 rounded-sm hover:bg-primarypurple active:bg-primaryblack text-white cursor-pointer">
              Entrar
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
