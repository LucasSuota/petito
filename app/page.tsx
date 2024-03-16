import Hero from "@/components/Hero";
import Header from "@/components/application/components/home/Header";
import FirebaseAuthContext from "@/context/FirebaseAuthContext";
import PagesTransition from "@/transition/PagesTransition";
import Link from "next/link";

const Home = () => {
  return (
    <FirebaseAuthContext>
      <PagesTransition>
        <Header />
        <Hero />
      </PagesTransition>
    </FirebaseAuthContext>
  );
};

export default Home;
