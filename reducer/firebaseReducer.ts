import { DispatchType } from "@/types/DispatchType";
import { UserType } from "@/types/UserType";

export const initialValue = { user: null };

export const firebaseReducer = (state: UserType, dispatch: DispatchType) => {
  switch (dispatch.type) {
    case "LOGIN": {
      return {
        ...state,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
