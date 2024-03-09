import ProtectedRouter from "@/components/protectionroute/ProtectedRouter";
import FirebaseAuthContext from "@/context/FirebaseAuthContext";
import PagesTransition from "@/transition/PagesTransition";
import Link from "next/link";

const Home = () => {
  return (
    <FirebaseAuthContext>
      <PagesTransition>
        <ProtectedRouter>
          <Link href={"/"}>Home</Link>
          <Link href={"/register"}>Register</Link>
          <Link href={"/login"}>Login</Link>
        </ProtectedRouter>
      </PagesTransition>
    </FirebaseAuthContext>
  );
};

export default Home;
