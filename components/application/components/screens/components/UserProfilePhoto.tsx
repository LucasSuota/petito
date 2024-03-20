"use client";

import { playSuccessPopUp } from "@/components/layout/popUp/PopUpSucessMessage";
import { UserContext } from "@/context/FirebaseAuthContext";
import { getCurrentUser, handlePhotoUpload } from "@/firebase/firebase";
import usePhoto from "@/hooks/usePhoto";
import { User } from "firebase/auth";
import Image from "next/image";
import React, { useContext, useState } from "react";

const UserProfilePhoto = () => {
  const userContext = useContext(UserContext);
  const [load, setLoad] = useState<number>(0);
  const { photoFile, photoFileUrl, handleFileChange } = usePhoto();

  const progressCallback = (n: number) => {
    setLoad(n);
    if (n === 100) {
      playSuccessPopUp();
    }
  };

  const handleButtonClick = () => {
    try {
      const user = getCurrentUser();
      if (photoFile) {
        handlePhotoUpload(photoFile, user as User, progressCallback);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <label htmlFor="fileInput" className="cursor-pointer">
        {photoFileUrl ? (
          <div className="sm:w-[250px] sm:h-[250px] w-[180px] h-[180px] relative animate-pulse">
            <Image
              className="rounded-full object-cover"
              src={photoFileUrl}
              fill
              alt="user profile picture preview"
            />
          </div>
        ) : (
          <>
            {userContext.state.user?.photoURL ? (
              <div className="sm:w-[250px] sm:h-[250px] w-[180px] h-[180px] relative">
                <Image
                  className="rounded-full object-cover"
                  src={userContext.state.user?.photoURL}
                  fill
                  alt="user profile picture preview"
                />
              </div>
            ) : (
              <div className="sm:w-[250px] sm:h-[250px] w-[180px] h-[180px] rounded-full bg-primaryblue animate-pulse" />
            )}
          </>
        )}
      </label>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      {photoFileUrl &&
        (load != 0 && load != 100 ? (
          <button
            className="text-primaryblue active:text-primarypurple disabled:text-slate-300"
            onClick={() => handleButtonClick()}
            disabled={true}
          >
            Enviando
          </button>
        ) : (
          <button
            className="text-primaryblue active:text-primarypurple disabled:text-slate-300"
            onClick={() => handleButtonClick()}
            disabled={false}
          >
            enviar
          </button>
        ))}
    </>
  );
};

export default UserProfilePhoto;
