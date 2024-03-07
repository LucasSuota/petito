import ProtectedRouter from "@/components/protectionroute/ProtectedRouter";
import FirebaseAuthContext from "@/context/FirebaseAuthContext";
import Link from "next/link";

const Home = () => {
  return (
    <FirebaseAuthContext>
      <ProtectedRouter>
        <Link href={"/"}>Home</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/login"}>Login</Link>
      </ProtectedRouter>
    </FirebaseAuthContext>
  );
};

export default Home;
