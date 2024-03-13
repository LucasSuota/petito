export interface PageAction {
  type: "SET_PAGE0" | "SET_PAGE1" | "SET_PAGE2" | "SET_PAGE3";
  payload: {
    page: number;
  };
}
