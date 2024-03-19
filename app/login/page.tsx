import Login from "@/components/login/Login";
import FirebaseAuthContext from "@/context/FirebaseAuthContext";
import LoadingContext from "@/context/LoadingContext";
import PagesTransition from "@/transition/PagesTransition";

const Home = () => {
  return (
    <FirebaseAuthContext>
      <LoadingContext>
        <PagesTransition>
          <Login />
        </PagesTransition>
      </LoadingContext>
    </FirebaseAuthContext>
  );
};

export default Home;
