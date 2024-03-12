import { User } from "firebase/auth";

export type FormsLoadingType = {
  user: User | null;
  isInitiallyLoading: boolean;
  isLoading: boolean;
  isRegistered: boolean;
};
