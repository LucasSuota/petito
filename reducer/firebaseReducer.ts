import { DispatchType } from "@/types/DispatchType";
import { UserType } from "@/types/UserType";

export const initialValue = {
  user: null,
  isInitiallyLoading: true,
  isLoading: false,
  isRegistered: false,
};

export const firebaseReducer = (state: UserType, action: DispatchType) => {
  switch (action.type) {
    case "USER_REQUEST": {
      return {
        ...state,
        state: (state.isLoading = true),
      };
    }
    case "REGISTER_SUCCESS": {
      return {
        ...state,
        state: ((state.isLoading = false), (state.isRegistered = true)),
      };
    }

    case "REGISTER_FAIL": {
      return {
        ...state,
        state: ((state.isLoading = false), (state.isRegistered = false)),
      };
    }

    default:
      return state;
  }
};
