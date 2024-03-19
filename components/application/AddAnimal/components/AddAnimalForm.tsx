"use client";

import { db } from "@/firebase/firebase";
import { AddAnimalFormType } from "@/types/AddAnimalFormType";
import { doc, setDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "@/context/FirebaseAuthContext";
import { Input } from "@/components/ui/input";

const AddAnimalForm = () => {
  const userContext = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAnimalFormType>();

  const handleFormSubmit = async (data: AddAnimalFormType) => {
    await setDoc(doc(db, `${userContext.state.user?.uid!}`, `${data.name}`), {
      name: data.name,
      age: data.age,
      bio: data.bio,
    });
  };

  return (
    <form className="flex flex-col gap-2 w-4/5">
      <Input
        placeholder="Name"
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
      <button
        type="submit"
        onClick={handleSubmit(handleFormSubmit)}
        className="bg-primaryblue h-[50px] text-slate-200 rounded-md"
      >
        Registrar
      </button>
    </form>
  );
};

export default AddAnimalForm;
