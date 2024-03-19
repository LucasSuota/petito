"use client";

import { playSuccessPopUp } from "@/components/layout/popUp/PopUpSucessMessage";
import { UserContext } from "@/context/FirebaseAuthContext";
import { getCurrentUser, handlePhotoUpload } from "@/firebase/firebase";
import {
  initialUserPhotoReducer,
  userPhotoReducer,
} from "@/reducer/userPhotoReducer";
import { User } from "firebase/auth";
import Image from "next/image";
import React, { useContext, useEffect, useReducer, useState } from "react";

const UserProfilePhoto = () => {
  const userContext = useContext(UserContext);
  const [state, dispatch] = useReducer(
    userPhotoReducer,
    initialUserPhotoReducer
  );
  const [load, setLoad] = useState<number>(0);

  const handlePhotoFileChange = (e: React.ChangeEvent) => {
    try {
      const target = e.target as HTMLInputElement;
      const files = target.files as FileList;
      if (files) {
        dispatch({
          type: "SET_PHOTO_FILE",
          payload: {
            photoFile: files[0],
            photoFileUrl: URL.createObjectURL(files[0]),
            userPhoto: null,
          },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const progressCallback = (n: number) => {
    setLoad(n);
    if (n === 100) {
      playSuccessPopUp();
    }
  };

  const handleButtonClick = () => {
    try {
      const user = getCurrentUser();
      if (state.photoFile) {
        handlePhotoUpload(state.photoFile, user as User, progressCallback);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    dispatch({
      type: "SET_USER_PHOTO",
      payload: {
        photoFile: null,
        photoFileUrl: null,
        userPhoto: userContext.state.user?.photoURL!,
      },
    });
  }, [userContext.state.user?.photoURL]);

  return (
    <>
      <label htmlFor="fileInput" className="cursor-pointer">
        {state.photoFileUrl ? (
          <div className="sm:w-[250px] sm:h-[250px] w-[180px] h-[180px] relative animate-pulse">
            <Image
              className="rounded-full object-cover"
              src={state.photoFileUrl}
              fill
              alt="user profile picture preview"
            />
          </div>
        ) : (
          <>
            {state.userPhoto ? (
              <div className="sm:w-[250px] sm:h-[250px] w-[180px] h-[180px] relative">
                <Image
                  className="rounded-full object-cover"
                  src={state.userPhoto}
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
        onChange={handlePhotoFileChange}
      />

      {state.photoFileUrl &&
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
