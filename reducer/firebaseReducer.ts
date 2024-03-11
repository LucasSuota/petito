import { DispatchType } from "@/types/DispatchType";
import { UserType } from "@/types/UserType";

export const initialValue = {
  user: null,
  isRegistering: false,
  isRegistered: false,
};

export const firebaseReducer = (state: UserType, action: DispatchType) => {
  switch (action.type) {
    case "REGISTER_REQUEST": {
      return {
        ...state,
        state: (state.isRegistering = true),
      };
    }
    case "REGISTER_SUCCESS": {
      return {
        ...state,
        state: ((state.isRegistering = false), (state.isRegistered = true)),
      };
    }

    case "REGISTER_FAIL": {
      return {
        ...state,
        state: ((state.isRegistering = false), (state.isRegistered = false)),
      };
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
