import ProtectedRouter from "@/components/protectionroute/ProtectedRouter";
import PagesTransition from "@/transition/PagesTransition";

const Home = () => {
  return (
    <PagesTransition>
      <ProtectedRouter>
        <div className="w-full h-dvh items-center justify-center">
          <h1>Aplicação... Está sendo desenvolvida</h1>
        </div>
      </ProtectedRouter>
    </PagesTransition>
  );
};

export default Home;
