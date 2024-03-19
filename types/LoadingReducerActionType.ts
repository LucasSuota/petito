export type LoadingReducerActionType = {
  type: "LOADING" | "NOT_LOADING";
  payload: {
    isLoading: boolean;
  };
};
