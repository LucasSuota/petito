"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import React, { useContext } from "react";
import { NavigationMenuContext } from "@/context/NavigationContext";
import { PageNavigationSelector } from "@/reducer/navigationReducer";

const NavigationMenu = () => {
  const userContext = useContext(UserContext);
  const navigationContext = useContext(NavigationMenuContext);

  return (
    <section className="w-full absolute bottom-0 p-4">
      <div className="flex flex-row items-center justify-between">
        <div
          onClick={() =>
            navigationContext.dispatch({
              type: PageNavigationSelector.ADD_ANIMAL,
            })
          }
          className="relative sm:w-[60px] sm:h-[30px] w-[50px] h-[30px]"
        >
          <Image src={"/svgs/petito-logo.svg"} fill alt="logo" />
        </div>
        <div
          onClick={() =>
            navigationContext.dispatch({
              type: PageNavigationSelector.DISPLAY_ANIMAL,
            })
          }
        >
          <HomeIcon
            className="text-primaryblue"
            style={{
              fontSize: "2.5rem",
            }}
          />
        </div>
        <div
          onClick={() =>
            navigationContext.dispatch({
              type: PageNavigationSelector.USER_INFO,
            })
          }
        >
          {userContext.state.user?.photoURL ? (
            <div className="relative sm:w-[70px] sm:h-[70px] w-[40px] h-[40px]">
              <Image
                className="rounded-full"
                src={userContext.state.user?.photoURL}
                fill
                alt="user profile logo"
              />
            </div>
          ) : (
            <AccountCircleIcon
              className="text-primaryblue"
              style={{
                fontSize: "2.5rem",
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default NavigationMenu;
