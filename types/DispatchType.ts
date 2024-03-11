export type DispatchType = {
  type:
    | "LOGIN"
    | "LOGOUT"
    | "REGISTER_SUCCESS"
    | "REGISTER_FAIL"
    | "REGISTER_REQUEST";
  payload: {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
  };
};
