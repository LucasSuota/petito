import React, { useState } from "react";

const usePhoto = () => {
  const [photoFile, setPhotoFile] = useState<null | File>(null);
  const [photoFileUrl, setPhotoFileUrl] = useState<null | string>(null);

  const handleFileChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;

    setPhotoFile(files[0]);
    setPhotoFileUrl(URL.createObjectURL(files[0]));
  };

  return { photoFile, photoFileUrl, handleFileChange };
};

export default usePhoto;
