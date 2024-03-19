export type UserPhotoReducerActionType = {
  type: "SET_PHOTO_FILE" | "SET_USER_PHOTO";
  payload: {
    photoFile: null | File;
    photoFileUrl: null | string;
    userPhoto: null | string;
  };
};
