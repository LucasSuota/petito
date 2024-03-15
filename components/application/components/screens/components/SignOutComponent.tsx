import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
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
      className="text-[1rem] font-semibold text-red-500 flex items-center justify-center gap-2 cursor-pointer text-red-500 hover:text-red-700"
      onClick={() => handleUserSignOut()}
    >
      Sair
      <ExitToAppIcon
        className="text-red-500 hover:text-red-700 cursor-pointer"
        style={{ fontSize: "1.5rem", transition: "ease 0.2s" }}
      />
    </div>
  );
};

export default SignOutComponent;
