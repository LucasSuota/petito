"use client";

import React, { useContext } from "react";
import { NavigationMenuContext } from "@/context/NavigationContext";
import { navigationMenuItems } from "@/constants/navigationMenuItems";

const NavigationMenu = () => {
  const navigationContext = useContext(NavigationMenuContext);

  return (
    <section className="fixed sm:w-[100px] sm:h-dvh w-full bg-slate-900 bottom-0 p-3">
      <div className="flex sm:flex-col sm:h-full flex-row items-center justify-evenly">
        {navigationMenuItems.map((item) => (
          <div
            key={item.item}
            onClick={() =>
              navigationContext.dispatch({
                type: item.item,
              })
            }
          >
            {
              <item.icon
                className={`${
                  navigationContext.state.page === item.page
                    ? "text-primaryblue"
                    : "text-white"
                } cursor-pointer transition-all`}
                style={{ fontSize: "2.0rem" }}
              />
            }
          </div>
        ))}
      </div>
    </section>
  );
};

export default NavigationMenu;
