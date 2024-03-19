import { DispatchType } from "@/types/DispatchType";
import { FormsLoadingType } from "@/types/FormsLoadingType";

export const initialValue = {
  user: null,
};

export const firebaseReducer = (
  state: FormsLoadingType,
  action: DispatchType
) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        state: (state.user = action.payload.user),
      };
    }

    default:
      return state;
  }
};
