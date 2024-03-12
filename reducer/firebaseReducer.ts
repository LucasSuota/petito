import { DispatchType } from "@/types/DispatchType";
import { FormsLoadingType } from "@/types/FormsLoadingType";

export const initialValue = {
  user: null,
  isInitiallyLoading: true,
  isLoading: false,
  isRegistered: false,
};

export const firebaseReducer = (
  state: FormsLoadingType,
  action: DispatchType
) => {
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

    case "SET_USER": {
      return {
        ...state,
        state:
          ((state.user = action.payload.user),
          (state.isLoading = false),
          (state.isInitiallyLoading = false)),
      };
    }

    default:
      return state;
  }
};
