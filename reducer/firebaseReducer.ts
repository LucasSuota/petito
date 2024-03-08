import { auth } from "@/firebase/firebase";
import { DispatchType } from "@/types/DispatchType";
import { UserType } from "@/types/UserType";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const initialValue = {
  user: null,
  isRegistering: false,
  isRegistered: false,
};

export const firebaseReducer = (state: UserType, action: DispatchType) => {
  switch (action.type) {
    case "REGISTER_USER": {
      return { ...state };
    }

    case "REGISTER_SUCCESS": {
      state.isRegistering = false;
      state.isRegistered = true;
      return { ...state };
    }

    case "REGISTER_FAIL": {
      state.isRegistering = false;
      state.isRegistered = false;
      return { ...state };
    }

    case "LOGIN": {
      console.log("login clicked");

      return {
        ...state,
        user: null,
      };
    }
    case "LOGOUT": {
      console.log("logout clicked");
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
};
