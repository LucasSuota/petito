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
          key={animal.name}
          className="w-full flex flex-row items-center justify-center bg-white shadow-md rounded-sm my-4"
        >
          <div className="w-2/4 h-[250px] flex flex-col items-start p-4 justify-center">
            <h2 className="text-md font-semibold">{animal.name}</h2>
            <p>{animal.species}</p>
          </div>
          <div className="w-2/4 h-[250px] flex items-center justify-center relative">
            <Image
              src={animal.photo}
              alt={animal.name}
              fill
              objectFit="cover"
            />
          </div>
        </div>
      ))}
    </main>
  );
};

export default AnimalFetch;
