import React from "react";
import { userSignOut } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

const SignOutComponent = () => {
  const router = useRouter();

  const handleUserSignOut = () => {
    try {
      userSignOut();
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="text-[1.2rem] font-semibold text-red-500 flex items-center justify-center cursor-pointer text-red-500 hover:text-red-700"
      onClick={() => handleUserSignOut()}
    >
      Sair...
    </div>
  );
};

export default SignOutComponent;
