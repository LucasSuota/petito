"use client";

import { UserContext } from "@/context/FirebaseAuthContext";
import { db } from "@/firebase/firebase";
import { AddAnimalFormType } from "@/types/AddAnimalFormType";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

const DisplayAnimalsScreen = () => {
  const userContext = useContext(UserContext);
  const [animalsList, setAnimalsList] =
    useState<[{ name: string; age: number; bio: string }]>();

  useEffect(() => {
    if (userContext) {
      const q = query(collection(db, `${userContext.state.user?.uid}`));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        // const cities: AddAnimalFormType[] = [];
        const animals: any = [];
        querySnapshot.forEach((doc) => {
          animals.push(doc.data());
        });
        setAnimalsList(animals);
      });
    }
  });

  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <div className="sm:w-2/4 w-4/5 flex flex-col items-start justify-center">
        {animalsList?.map((animal) => (
          <div className="my-2" key={animal.name}>
            <p>Nome: {animal.name}</p>
            <p>Idade: {animal.age}</p>
            <p>Idade: {animal.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAnimalsScreen;
