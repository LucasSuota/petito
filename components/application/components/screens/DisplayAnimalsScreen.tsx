"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import { db } from "@/firebase/firebase";
import { AddAnimalFormType } from "@/types/AddAnimalFormType";
import {
  DocumentData,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

const DisplayAnimalsScreen = () => {
  const userContext = useContext(UserContext);
  const [animalsList, setAnimalsList] = useState<AddAnimalFormType>();

  const fetchData = async () => {
    const q = query(collection(db, `${userContext.state.user?.uid}`));
    await getDocs(q).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(newData);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-dvh flex flex-col items-center">
      <div className="sm:w-2/4 w-4/5 flex flex-col items-start justify-center">
        {/* {animalsList?.map((animal) => (
          <div className="my-2" key={animal.name}>
            <p>Nome: {animal.name}</p>
            <p>Idade: {animal.age}</p>
            <p>Idade: {animal.bio}</p>
          </div>
        ))} */}
        <p>Being built.</p>
      </div>
    </div>
  );
};

export default DisplayAnimalsScreen;
