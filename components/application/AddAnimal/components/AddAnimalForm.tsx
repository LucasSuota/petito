"use client";

import { db, storage } from "@/firebase/firebase";
import { Input } from "@/components/ui/input";
import { AddAnimalFormType } from "@/types/AddAnimalFormType";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "@/context/FirebaseAuthContext";
import usePhoto from "@/hooks/usePhoto";
import Image from "next/image";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const AddAnimalForm = () => {
  const userContext = useContext(UserContext);
  const { register, handleSubmit } = useForm<AddAnimalFormType>();
  const { photoFile, photoFileUrl, handleFileChange } = usePhoto();
  const [firebasePhotoUrl, setFirebasePhotoUrl] = useState<null | string>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const setDownloadUrl = (url: string) => {
    setFirebasePhotoUrl(url);
  };

  const handleAnimalPhotoProgress = (n: number) => {
    if (n === 100) {
      setUploadProgress(100);
    }
  };

  const handleUploadAnimalPhoto = async ({ name }: AddAnimalFormType) => {
    const animalRef = ref(
      storage,
      `user/${userContext.state.user?.uid}/${name}/${name}.png`
    );
    if (photoFile) {
      try {
        const uploadTask = uploadBytesResumable(animalRef, photoFile);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (progress === 100) {
              handleAnimalPhotoProgress(parseInt(progress.toFixed(0)));
            }
          },
          (error) => {
            console.error(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setDownloadUrl(downloadURL);
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleAnimalDataUpload = async ({
    name,
    species,
  }: AddAnimalFormType) => {
    const animalRef = doc(db, `${userContext.state.user?.uid}/${name}/`);
    if (uploadProgress === 100 && firebasePhotoUrl) {
      try {
        await setDoc(animalRef, {
          name,
          species,
          photo: firebasePhotoUrl,
        });
        alert("Sucesso ao cadastrar animal!");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleForm = async (data: AddAnimalFormType) => {
    try {
      await handleUploadAnimalPhoto(data);
      await handleAnimalDataUpload(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="flex flex-col gap-2 sm:w-2/5 w-4/5">
      <Input
        placeholder="Nome"
        className="h-[50px]"
        {...register("name", { required: true })}
      />
      <Input
        placeholder="Espécie"
        className="h-[50px]"
        {...register("species", { required: true })}
      />
      <label htmlFor="animalFile" className="cursor-pointer">
        {photoFileUrl ? (
          <div className="w-full sm:h-[600px] h-[250px] relative relative bg-primaryblue rounded-md flex items-center justify-center">
            <Image
              className="object-cover z-10 hover:opacity-60 transition-all rounded-md"
              src={photoFileUrl}
              fill
              alt="animal photo"
            />
          </div>
        ) : (
          <div className="w-full sm:h-[400px] h-[100px] relative bg-primaryblue rounded-md flex items-center justify-center">
            <p className="z-40 text-white font-semibold">Adicionar foto</p>
            <Image
              className="object-cover opacity-45 z-10 hover:opacity-60 transition-all"
              src={"/images/login-background.jpg"}
              fill
              alt="animal photo"
            />
          </div>
        )}
      </label>
      <input
        type="file"
        id="animalFile"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
        required
      />
      <button
        type="submit"
        onClick={handleSubmit(handleForm)}
        className="bg-primaryblue hover:bg-secondaryblue active:bg-black h-[50px] text-slate-200 rounded-md"
      >
        Registrar
      </button>
    </form>
  );
};

export default AddAnimalForm;
