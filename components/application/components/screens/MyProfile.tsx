import { UserContext } from "@/context/FirebaseAuthContext";
import React, { useContext } from "react";

const MyProfile = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="w-full h-dvh flex items-center justify-center flex flex-col">
      Bem vindo:
      <span className="font-bold">{userContext.state.user?.email}</span>
    </div>
  );
};

export default MyProfile;
