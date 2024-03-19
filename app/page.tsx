import Hero from "@/components/layout/Hero";
import Header from "@/components/application/components/home/Header";
import FirebaseAuthContext from "@/context/FirebaseAuthContext";
import PagesTransition from "@/transition/PagesTransition";

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
