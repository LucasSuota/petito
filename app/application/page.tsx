import ApplicationHome from "@/components/application/components/ApplicationHome";
import NavigationMenu from "@/components/application/components/NavigationMenu";
import ProtectedRouter from "@/components/protectionroute/ProtectedRouter";
import FirebaseAuthContext from "@/context/FirebaseAuthContext";
import NavigationContext from "@/context/NavigationContext";
import PagesTransition from "@/transition/PagesTransition";

const Home = () => {
  return (
    <PagesTransition>
      <ProtectedRouter>
        <FirebaseAuthContext>
          <NavigationContext>
            <ApplicationHome />
            <NavigationMenu />
          </NavigationContext>
        </FirebaseAuthContext>
      </ProtectedRouter>
    </PagesTransition>
  );
};

export default Home;
