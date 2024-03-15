"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import { getCurrentUser, handlePhotoUpload } from "@/firebase/firebase";
import { User } from "firebase/auth";
import Image from "next/image";
import React, { useContext, useState } from "react";

const UserProfilePhoto = () => {
  const userContext = useContext(UserContext);
  const [photoFile, setPhotoFile] = useState<null | File>();
  const [photoFileUrl, setPhotoFileUrl] = useState<null | string>();

  const handlePhotoFileChange = (e: React.ChangeEvent) => {
    try {
      const target = e.target as HTMLInputElement;
      const files = target.files as FileList;
      if (files) {
        setPhotoFile(files[0]);
        setPhotoFileUrl(URL.createObjectURL(files[0]));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleButtonClick = () => {
    try {
      const user = getCurrentUser();
      if (photoFile) {
        handlePhotoUpload(photoFile, user as User);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <label htmlFor="fileInput" className="cursor-pointer">
        {photoFileUrl ? (
          <div className="sm:w-[250px] sm:h-[250px] w-[180px] h-[180px] relative">
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
              <div className="sm:w-[250px] sm:h-[250px] w-[180px] h-[180px] rounded-full bg-primaryblue" />
            )}
          </>
        )}
      </label>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept="image/*"
        onChange={handlePhotoFileChange}
      />
      {photoFileUrl && (
        <button
          className="text-primaryblue active:text-primarypurple"
          onClick={() => handleButtonClick()}
        >
          enviar
        </button>
      )}
    </>
  );
};

export default UserProfilePhoto;
