import { UserContext } from "@/context/FirebaseAuthContext";
import { useContext } from "react";

const useAuth = () => {
  return useContext(UserContext);
};

export default useAuth;
