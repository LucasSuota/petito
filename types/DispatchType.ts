import { User } from "firebase/auth";

export type DispatchType = {
  type: "LOGIN" | "LOGOUT";
  payload: User;
};
