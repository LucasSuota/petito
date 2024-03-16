import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import Link from "next/link";

const Login = () => {
  return (
    <main className="sm:max-w-[60%] max-w-[90%] h-dvh mx-auto flex sm:flex-row flex-col items-center justify-center ">
      <div className="sm:hidden flex w-[90%] sm:h-[700px] h-[200px] bg-register-background bg-cover bg-top bg-no-repeat rounded-t-xl sm:shadow-xl" />
      <div className="sm:flex hidden w-[50%] sm:h-[600px] max-h-[70%] h-[400px] bg-register-background bg-cover bg-top bg-no-repeat rounded-l-xl sm:shadow-xl" />
      <div className="bg-white sm:w-[50%] sm:h-[600px] max-h-[70%] w-[90%] px-4 py-10 rounded-sm shadow-xl flex flex-col items-center justify-center">
        <div className="mb-10 sm:w-[80%]">
          <h2 className="text-2xl text-primaryblue font-bold">
            Seja bem vindo de novo!
          </h2>
          <h3 className="text-lg">Seu bichinho está esperando.</h3>
        </div>
        <LoginForm />
        <Link href={"/register"}>
          <p className="text-sm text-primaryblue mt-2">Criar conta</p>
        </Link>
      </div>
    </main>
  );
};

export default Login;
