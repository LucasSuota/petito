import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { CreateAccountType } from "@/types/CreateAccountType";
import { SignInAccountType } from "@/types/SignInAccountType";
import { useRouter } from "next/navigation";

export const createAccount = ({
  firstName,
  lastName,
  email,
  password,
}: CreateAccountType) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const signInAccount = ({ email, password }: SignInAccountType) => {
  signInWithEmailAndPassword(auth, email, password);
};
