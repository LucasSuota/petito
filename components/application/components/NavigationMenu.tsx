"use client";

import React, { useContext } from "react";
import { NavigationMenuContext } from "@/context/NavigationContext";
import { navigationMenuItems } from "@/constants/navigationMenuItems";

const NavigationMenu = () => {
  const navigationContext = useContext(NavigationMenuContext);

  return (
    <section className="w-full bg-primaryblack absolute bottom-0 p-4">
      <div className="flex flex-row items-center justify-evenly">
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
                    ? "text-primaryblue "
                    : "text-primarycream"
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
