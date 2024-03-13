"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import Image from "next/image";
import React, { useContext, useState } from "react";

const MyProfile = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="w-full h-dvh flex items-center justify-center flex flex-col">
      <div className="bg-white rounded-t-xl p-4 w-4/5 h-[80%]">
        <div className="flex flex-col text-center gap-4 mt-4 items-center justify-center">
          <label htmlFor="fileInput" className="cursor-pointer">
            {userContext.state.user?.photoURL ? (
              <Image
                src={userContext.state.user?.photoURL}
                width={70}
                height={70}
                alt="user profile picture"
              />
            ) : (
              <div className="w-[80px] h-[80px] rounded-full bg-primaryblue"></div>
            )}
          </label>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/png, image/jpeg, image/jpg"
          />
          <div>
            <p className="text-2xl font-bold">
              {userContext.state.user?.displayName}
            </p>
            <p>{userContext.state.user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
