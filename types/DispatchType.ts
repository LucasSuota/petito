import { User } from "firebase/auth";

export type DispatchType = {
  type: "USER_REQUEST" | "REGISTER_SUCCESS" | "REGISTER_FAIL";
  payload: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    user?: User;
  };
};
