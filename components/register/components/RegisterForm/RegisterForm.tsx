"use client";

import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/layout/inputs/PasswordInput";
import TextInput from "@/components/layout/inputs/TextInput";
import { restartTimeline } from "@/components/layout/popUp/PopUpErrorMessage";
import { UserContext } from "@/context/FirebaseAuthContext";
import { auth } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
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
      <form className="sm:w-[80%] flex flex-col gap-2" onSubmit={onSubmit}>
        <Input
          type="text"
          {...register("firstName", { required: true })}
          placeholder="Nome"
          className="h-[50px]"
        />
        <Input
          type="text"
          {...register("lastName", { required: true })}
          placeholder="Sobrenome"
          className="h-[50px]"
        />
        <Input
          type="text"
          {...register("email", { required: true })}
          placeholder="Email"
          className="h-[50px]"
        />
        <Input
          {...register("password", { required: true })}
          placeholder="Senha"
          className="h-[50px]"
          type="password"
        />

        {loadingContext.state.isLoading ? (
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
