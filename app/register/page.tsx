import Register from "@/components/register/Register";
import FirebaseAuthContext from "@/context/FirebaseAuthContext";
import PagesTransition from "@/transition/PagesTransition";

const Home = () => {
  return (
    <FirebaseAuthContext>
      <PagesTransition>
        <Register />
      </PagesTransition>
    </FirebaseAuthContext>
  );
};

export default Home;
