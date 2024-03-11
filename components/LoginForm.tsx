"use client";

import PasswordInput from "@/components/layout/inputs/PasswordInput";
import TextInput from "@/components/layout/inputs/TextInput";
import { UserContext } from "@/context/FirebaseAuthContext";
import { auth } from "@/firebase/firebase";
import { error } from "console";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    new Promise<void>(() => {
      context.dispatch({
        type: "LOGIN_REQUEST",
      });
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
          context.dispatch({
            type: "LOGIN",
          });
        })
        .then(() => router.push("/application"));
    });
  });

  return (
    <form className="sm:w-[80%] flex flex-col gap-2" onSubmit={onSubmit}>
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
        helperText={errors.password ? "Senha é necessária" : ""}
      />
      <button
        className="bg-primaryblue hover:bg-primarypurple active:bg-primaryblack text-white rounded-sm px-2 py-4 transition-all"
        type="submit"
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
