import { auth, db } from "@/firebase/firebase";
import { AnimalFetchType } from "@/types/AnimalFetchType";
import { collection, getDocs, query } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AnimalFetch = () => {
  const [animals, setAnimals] = useState<AnimalFetchType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const animalsRef = collection(db, `${auth.currentUser?.uid}`);
      const animalsSnapshot = await getDocs(animalsRef);
      const animalsData = animalsSnapshot.docs.map(
        (doc) => doc.data() as AnimalFetchType
      );
      setAnimals(animalsData);
    };

    fetchData();
  }, []);

  return (
    <main className="w-full h-dvh text-sm flex flex-col items-center justify-center">
      {animals.map((animal) => (
        <div
          className="my-4 w-2/4 bg-primaryblue p-4 flex flex-col items-center justify-center"
          key={animal.name}
        >
          <h1>{animal.name}</h1>
          <p>{animal.species}</p>
          <Image
            src={animal.photo}
            width={100}
            height={100}
            alt={animal.name}
          />
        </div>
      ))}
    </main>
  );
};

export default AnimalFetch;
