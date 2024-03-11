import LoginForm from "@/components/LoginForm";
import PopUpMessage from "@/components/layout/popUp/PopUpMessage";
import ProtectedRouter from "@/components/protectionroute/ProtectedRouter";
import PagesTransition from "@/transition/PagesTransition";

const Home = () => {
  return (
    <PagesTransition>
      <ProtectedRouter>
        <div>
          <h1>TEstando</h1>
        </div>
      </ProtectedRouter>
    </PagesTransition>
  );
};

export default Home;
