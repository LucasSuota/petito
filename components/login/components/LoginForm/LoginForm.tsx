"use client";

import { restartTimeline } from "@/components/layout/popUp/PopUpErrorMessage";
import { Input } from "@/components/ui/input";
import { LoadContext } from "@/context/LoadingContext";
import { auth } from "@/firebase/firebase";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const loadingContext = useContext(LoadContext);
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    new Promise<void>(() => {
      loadingContext.dispatch({ type: "LOADING" });
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
          if (auth.currentUser?.emailVerified === false) {
            sendEmailVerification(auth.currentUser);
          } else {
            router.push("/application");
          }
        })
        .then(() => loadingContext.dispatch({ type: "NOT_LOADING" }))
        .catch(() => {
          loadingContext.dispatch({ type: "NOT_LOADING" });
          restartTimeline();
        });
    });
  });

  return (
    <form className="w-[80%] flex flex-col gap-2" onSubmit={onSubmit}>
      <Input
        placeholder="Email"
        className="h-[50px] w-full"
        {...register("email", { required: true })}
      />
      <Input
        placeholder="Senha"
        className="h-[50px] w-full"
        {...register("password", { required: true })}
        type="password"
      />
      {loadingContext.state.isLoading ? (
        <button
          type="submit"
          disabled={true}
          className="bg-primaryblue hover:bg-primary active:bg-primaryblack disabled:bg-blue-200 text-white rounded-sm px-2 py-4 transition-all"
        >
          Entrando...
        </button>
      ) : (
        <button
          type="submit"
          disabled={false}
          className="bg-primaryblue hover:bg-primary active:bg-primaryblack disabled:bg-blue-200 text-white rounded-sm px-2 py-4 transition-all"
        >
          Entrar
        </button>
      )}
    </form>
  );
};

export default LoginForm;
