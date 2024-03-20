"use client";

import { Input } from "@/components/ui/input";
import { restartTimeline } from "@/components/layout/popUp/PopUpErrorMessage";
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { LoadContext } from "@/context/LoadingContext";

const RegisterForm = () => {
  const loadingContext = useContext(LoadContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    new Promise<void>(() => {
      loadingContext.dispatch({ type: "LOADING" });
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
          if (auth.currentUser) {
            sendEmailVerification(auth.currentUser);
          }
        })
        .then(() => {
          loadingContext.dispatch({ type: "NOT_LOADING" });
          router.push("/login");
        })
        .catch((error) => {
          loadingContext.dispatch({ type: "NOT_LOADING" });
          restartTimeline();
        });
    });
  });

  return (
    <>
      <form
        className="sm:w-[80%] w-[100%] flex flex-col gap-2"
        onSubmit={onSubmit}
      >
        <Input
          type="text"
          {...register("firstName", { required: true })}
          placeholder="Nome"
          className="h-[50px] w-full text-md"
        />
        <Input
          type="text"
          {...register("lastName", { required: true })}
          placeholder="Sobrenome"
          className="h-[50px] w-full text-md"
        />
        <Input
          type="text"
          {...register("email", { required: true })}
          placeholder="Email"
          className="h-[50px] w-full text-md"
        />
        <Input
          {...register("password", { required: true })}
          placeholder="Senha"
          className="h-[50px] w-full text-md"
          type="password"
        />

        {loadingContext.state.isLoading ? (
          <button
            type="submit"
            disabled={true}
            className="bg-primaryblue hover:bg-secondaryblue active:bg-black disabled:bg-blue-200 text-white rounded-sm px-2 py-4 transition-all"
          >
            Registrando...
          </button>
        ) : (
          <button
            type="submit"
            disabled={false}
            className="bg-primaryblue hover:bg-secondaryblue active:bg-black disabled:bg-blue-200 text-white rounded-sm px-2 py-4 transition-all"
          >
            Registrar
          </button>
        )}
      </form>
    </>
  );
};

export default RegisterForm;
