"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import { CheckCircleOutline } from "@mui/icons-material";
import { useContext } from "react";

const SuccessErrorPopUp = () => {
  const context = useContext(UserContext);

  return (
    <div className="popUpAlert">
      {context.state.isRegistered ? (
        <div className="absolute">Sua conta foi criada com sucesso</div>
      ) : (
        <div className="mt-2 absolute items-center justify-center gap-10 w-1/4 mx-auto right-[60%] top-0 tranlate-x-[-50%] bg-red-100 p-4 rounded-md shadow-xl">
          <CheckCircleOutline className="text-primaryblack" />
          <p className="text-center text-primaryblack ">
            Houve um erro ao criar sua conta
          </p>
        </div>
      )}
    </div>
  );
};

export default SuccessErrorPopUp;
