import Login from "@/components/login/Login";
import FirebaseAuthContext from "@/context/FirebaseAuthContext";
import PagesTransition from "@/transition/PagesTransition";

const Home = () => {
  return (
    <FirebaseAuthContext>
      <PagesTransition>
        <Login />
      </PagesTransition>
    </FirebaseAuthContext>
  );
};

export default Home;
