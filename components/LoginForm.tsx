"use client";

import PasswordInput from "@/components/layout/inputs/PasswordInput";
import TextInput from "@/components/layout/inputs/TextInput";
import { signInAccount } from "@/firebase/database";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    signInAccount(data);
    router.push("/");
  });

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
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

export default LoginForm;
