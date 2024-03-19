import { User } from "firebase/auth";

export type DispatchType = {
  type: "SET_USER";
  payload: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    user: User;
  };
};
