import RegisterForm from "@/components/RegisterForm";

const Home = () => {
  return (
    <main className="min-w-full h-screen mx-auto flex flex-col items-center justify-center">
      <div className="bg-white max-w-[350px] sm:w-2/4 w-4/5 px-4 py-10 rounded-sm shadow-xl">
        <RegisterForm />
      </div>
    </main>
  );
};

export default Home;
