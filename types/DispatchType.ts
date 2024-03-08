export type DispatchType = {
  type: "LOGIN" | "LOGOUT" | "REGISTER_SUCCESS" | "REGISTER_FAIL";
  payload: {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
  };
};
