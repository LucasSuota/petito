"use client";

import PasswordInput from "@/components/layout/inputs/PasswordInput";
import TextInput from "@/components/layout/inputs/TextInput";
import { UserContext } from "@/context/FirebaseAuthContext";
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    new Promise<void>((resolve, reject) => {
      context.state.isRegistering = true;
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
          context.dispatch({
            type: "REGISTER_SUCCESS",
          });
          router.push("/login");
          resolve();
        })
        .catch((error) => {
          context.dispatch({
            type: "REGISTER_FAIL",
            payload: { error },
          });
          reject(error);
        });
    });
  });

  return (
    <>
      <form className="sm:w-[80%] flex flex-col gap-2" onSubmit={onSubmit}>
        <TextInput
          name="firstName"
          label="Nome"
          register={register}
          registerName="firstName"
          error={!!errors.firstName}
          helperText={errors.firstName ? "Nome é necessário" : ""}
        />
        <TextInput
          name="lastName"
          label="Sobrenome"
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
          label="Senha"
          register={register}
          registerName="password"
          error={!!errors.password}
          helperText={
            errors.password ? "Senha é necessária e deve conter 8 digitos" : ""
          }
        />
        <p
          className={`${
            context.state.isRegistered ? "text-green-800" : "text-red-800"
          } text-sm mt-2 mb-2
            `}
        >
          {context.state.isRegistered
            ? "Sucesso ao registrar"
            : "Erro ao registrar"}
        </p>
        {context.state.isRegistering ? (
          <button
            type="submit"
            disabled={true}
            className="bg-primaryblue hover:bg-primarypurple active:bg-primaryblack disabled:bg-blue-200 text-white rounded-sm px-2 py-4 transition-all"
          >
            Registrando...
          </button>
        ) : (
          <button
            type="submit"
            disabled={false}
            className="bg-primaryblue hover:bg-primarypurple active:bg-primaryblack disabled:bg-blue-200 text-white rounded-sm px-2 py-4 transition-all"
          >
            Registrar
          </button>
        )}
      </form>
    </>
  );
};

export default RegisterForm;
