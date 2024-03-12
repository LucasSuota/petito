import { User } from "firebase/auth";

export type UserType = {
  user: User | null;
  isInitiallyLoading: boolean;
  isLoading: boolean;
  isRegistered: boolean;
};
