import ProtectedRouter from "@/components/protectionroute/ProtectedRouter";
import FirebaseAuthContext from "@/context/FirebaseAuthContext";

const Home = () => {
  return (
    <FirebaseAuthContext>
      <ProtectedRouter>
        <h1>Testando</h1>
      </ProtectedRouter>
    </FirebaseAuthContext>
  );
};

export default Home;
