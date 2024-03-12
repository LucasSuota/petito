import Header from "@/components/application/components/Header";
import ProtectedRouter from "@/components/protectionroute/ProtectedRouter";
import PagesTransition from "@/transition/PagesTransition";

const Home = () => {
  return (
    <PagesTransition>
      <ProtectedRouter>
        <Header />
      </ProtectedRouter>
    </PagesTransition>
  );
};

export default Home;
