import { LoadingReducerActionType } from "@/types/LoadingReducerActionType";
import { LoadingReducerStateType } from "@/types/LoadingReducerStateType";

export const initialLoadingReducerState = {
  isLoading: false,
};

export const loadingReducer = (
  state: LoadingReducerStateType,
  action: LoadingReducerActionType
) => {
  switch (action.type) {
    case "LOADING": {
      return { ...state, isLoading: true };
    }
    case "NOT_LOADING": {
      return { ...state, isLoading: false };
    }
  }
};
