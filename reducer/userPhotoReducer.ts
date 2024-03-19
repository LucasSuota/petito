import { UserPhotoReducerActionType } from "@/types/UserPhotoReducerActionType";
import { UserPhotoReducerStateType } from "@/types/UserPhotoReducerStateType";

export const initialUserPhotoReducer = {
  photoFileUrl: null,
  photoFile: null,
  userPhoto: null,
};

export const userPhotoReducer = (
  state: UserPhotoReducerStateType,
  action: UserPhotoReducerActionType
) => {
  switch (action.type) {
    case "SET_PHOTO_FILE": {
      return {
        ...state,
        photoFile: action.payload.photoFile,
        photoFileUrl: action.payload.photoFileUrl,
      };
    }
    case "SET_USER_PHOTO": {
      return {
        ...state,
        userPhoto: action.payload.userPhoto,
      };
    }
    default: {
      return state;
    }
  }
};
