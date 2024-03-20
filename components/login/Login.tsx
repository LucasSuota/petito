import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import Link from "next/link";
import PopUpMessage from "../layout/popUp/PopUpErrorMessage";
import PopUpErrorMessage from "../layout/popUp/PopUpErrorMessage";

const Login = () => {
  return (
    <>
      <PopUpErrorMessage />
      <main className="sm:max-w-[60%] max-w-[100%] h-dvh mx-auto flex sm:flex-row flex-col items-center justify-center ">
        <div className="sm:hidden flex w-[90%] sm:h-[700px] h-[150px] bg-[url('/images/login-background.jpg')] bg-cover bg-top bg-no-repeat rounded-t-xl sm:shadow-xl" />
        <div className="sm:flex hidden w-[50%] sm:h-[600px] max-h-[70%] h-[400px] bg-[url('/images/login-background.jpg')] bg-cover bg-top bg-no-repeat rounded-l-xl sm:shadow-xl" />
        <div className="bg-white sm:w-[50%] w-[90%] sm:h-[600px] max-h-[70%] px-4 py-10 rounded-r-sm shadow-xl flex flex-col items-center justify-center">
          <div className="mb-10 sm:w-[80%] w-[100%] sm:text-start text-center">
            <h2 className="text-2xl sm:text-3xl text-primaryblue font-bold">
              Bem vindo de novo!
            </h2>
            <h3 className="text-lg sm:text-xl">Seu bichinho está esperando.</h3>
          </div>
          <LoginForm />
          <div className="flex items-center sm:justify-start justify-center w-[100%] sm:w-[80%]">
            <Link href={"/register"}>
              <p className="text-primaryblue hover:text-secondaryblue active:text-black text-sm mt-4">
                Criar uma conta
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
