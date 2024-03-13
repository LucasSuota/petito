import { PageAction } from "@/types/PageAction";
import { PageState } from "@/types/PageState";

export enum PageNavigationSelector {
  DISPLAY_ANIMAL = "SET_PAGE0",
  ADD_ANIMAL = "SET_PAGE1",
  USER_INFO = "SET_PAGE3",
}

export const initialNavigationValue = {
  page: 0,
};

export const navigationReducer = (state: PageState, action: PageAction) => {
  switch (action.type) {
    case PageNavigationSelector.DISPLAY_ANIMAL: {
      return { ...state, page: 0 };
    }
    case PageNavigationSelector.ADD_ANIMAL: {
      return { ...state, page: 1 };
    }
    case PageNavigationSelector.USER_INFO: {
      return { ...state, page: 2 };
    }
    default: {
      return state;
    }
  }
};
