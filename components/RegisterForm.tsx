"use client";

import PasswordInput from "@/components/layout/inputs/PasswordInput";
import TextInput from "@/components/layout/inputs/TextInput";
import { createAccount } from "@/firebase/database";
import { db } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    createAccount(data);
    addDoc(collection(db, "users"), {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  });

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <TextInput
        name="firstName"
        label="First Name"
        register={register}
        registerName="firstName"
        error={!!errors.firstName}
        helperText={errors.firstName ? "Nome é necessário" : ""}
      />
      <TextInput
        name="lastName"
        label="Last Name"
        registerName="lastName"
        register={register}
        error={!!errors.lastName}
        helperText={errors.lastName ? "Sobrenome é necessário" : ""}
      />
      <TextInput
        name="email"
        label="Email"
        register={register}
        type="email"
        registerName="email"
        error={!!errors.email}
        helperText={errors.email ? "Insira um email valido" : ""}
      />
      <PasswordInput
        name="password"
        label="Password"
        register={register}
        registerName="password"
        error={!!errors.password}
        helperText={
          errors.password ? "Senha é necessária e deve conter 8 digitos" : ""
        }
      />
      <button
        className="bg-primaryblue hover:bg-primarypurple active:bg-primaryblack text-white rounded-sm px-2 py-4 transition-all"
        type="submit"
      >
        Registrar
      </button>
    </form>
  );
};

export default RegisterForm;
