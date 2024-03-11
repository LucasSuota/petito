import { User } from "firebase/auth";

export type UserType = {
  user: User | null;
  isRegistering: boolean;
  isRegistered: boolean;
  isLogging: boolean;
  isLogged: boolean;
};
