import AnimalFetch from "../../DisplayAnimal/AnimalFetch";

const DisplayAnimalsScreen = () => {
  return (
    <div className="w-full h-dvh flex flex-col items-center">
      <div className="sm:w-2/4 w-4/5 flex flex-col items-start justify-center">
        <AnimalFetch />
      </div>
    </div>
  );
};

export default DisplayAnimalsScreen;
