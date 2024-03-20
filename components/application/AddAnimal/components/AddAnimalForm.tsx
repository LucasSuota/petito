"use client";

import {
  db,
  getCurrentUser,
  handleAnimalPhotoUpload,
} from "@/firebase/firebase";
import { AddAnimalFormType } from "@/types/AddAnimalFormType";
import { doc, setDoc } from "firebase/firestore";
import React, { useContext, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "@/context/FirebaseAuthContext";
import { Input } from "@/components/ui/input";
import usePhoto from "@/hooks/usePhoto";
import Image from "next/image";
import { User } from "firebase/auth";
import { playSuccessPopUp } from "@/components/layout/popUp/PopUpSucessMessage";

const AddAnimalForm = () => {
  const userContext = useContext(UserContext);
  const [load, setLoad] = useState<number>(0);
  const { register, handleSubmit } = useForm<AddAnimalFormType>();
  const { photoFile, photoFileUrl, handleFileChange } = usePhoto();

  const progressCallback = (n: number) => {
    setLoad(n);
    if (n === 100) {
      playSuccessPopUp();
    }
  };

  const handleFormSubmit = async (data: AddAnimalFormType) => {
    const user = getCurrentUser();

    if (photoFile) {
      await handleAnimalPhotoUpload(
        photoFile,
        data.name,
        user as User,
        progressCallback
      );
    }

    await setDoc(doc(db, `${userContext.state.user?.uid!}`, `${data.name}`), {
      name: data.name,
      age: data.age,
      bio: data.bio,
    }).then(() => {
      alert("adicionou");
    });
  };

  return (
    <form className="flex flex-col gap-2 sm:w-1/5 w-4/5">
      <Input
        placeholder="Nome"
        className="h-[50px]"
        {...register("name", { required: true })}
      />
      <Input
        placeholder="Idade"
        className="h-[50px]"
        {...register("age", { required: true })}
      />
      <Input
        placeholder="Características"
        className="h-[50px]"
        {...register("bio", { required: true })}
      />

      <label htmlFor="animalFile" className="cursor-pointer">
        {photoFileUrl ? (
          <div className="w-full h-[250px] relative rounded-md">
            <Image
              className="object-cover"
              src={photoFileUrl}
              fill
              alt="animal photo"
            />
          </div>
        ) : (
          <div className="w-full h-[100px] bg-primaryblue rounded-md">
            Imagem
          </div>
        )}
      </label>
      <input
        type="file"
        id="animalFile"
        className="hidden"
        accept="image/*"
        {...register("photo", { required: true })}
        onChange={handleFileChange}
      />
      <button
        type="submit"
        onClick={handleSubmit(handleFormSubmit)}
        className="bg-primaryblue hover:bg-secondaryblue active:bg-black h-[50px] text-slate-200 rounded-md"
      >
        Registrar
      </button>
    </form>
  );
};

export default AddAnimalForm;
