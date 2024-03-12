"use client";

import PasswordInput from "@/components/layout/inputs/PasswordInput";
import TextInput from "@/components/layout/inputs/TextInput";
import { UserContext } from "@/context/FirebaseAuthContext";
import { auth } from "@/firebase/firebase";
import { error } from "console";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const context = useContext(UserContext);
  const [loginError, setLoginError] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    new Promise<void>(() => {
      context.dispatch({
        type: "USER_REQUEST",
      });
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
          context.dispatch({
            type: "LOGIN",
          });
        })
        .then(() => {
          setLoginError(false);
        })
        .then(() => {
          alert("Usuario Logado");
        })
        .catch((error) => {
          console.error(error);
          setLoginError(true);
        });
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
      {loginError && (
        <p className="text-red-500 text-sm">Email ou senha incorreto</p>
      )}
      {context.state.isLoading ? (
        <button
          type="submit"
          disabled={true}
          className="bg-primaryblue hover:bg-primarypurple active:bg-primaryblack disabled:bg-blue-200 text-white rounded-sm px-2 py-4 transition-all"
        >
          Entrando...
        </button>
      ) : (
        <button
          type="submit"
          disabled={false}
          className="bg-primaryblue hover:bg-primarypurple active:bg-primaryblack disabled:bg-blue-200 text-white rounded-sm px-2 py-4 transition-all"
        >
          Entrar
        </button>
      )}
    </form>
  );
};

export default LoginForm;
