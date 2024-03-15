"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import {
  getCurrentUser,
  handlePhotoUpload,
  storage,
} from "@/firebase/firebase";
import { User, updateProfile } from "firebase/auth";
import {
  StorageReference,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
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
        {userContext.state.user?.photoURL ? (
          <div className="w-[100px] h-[100px] relative">
            <Image
              className="rounded-full object-cover"
              src={userContext.state.user?.photoURL}
              fill
              alt="user profile picture preview"
            />
          </div>
        ) : (
          <>
            {photoFileUrl ? (
              <div className="w-[100px] h-[100px] relative">
                <Image
                  className="rounded-full object-cover"
                  src={photoFileUrl}
                  fill
                  alt="user profile picture preview"
                />
              </div>
            ) : (
              <div className="w-[100px] h-[100px] rounded-full bg-primaryblue"></div>
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
      <button onClick={() => handleButtonClick()}>enviar</button>
    </>
  );
};

export default UserProfilePhoto;
