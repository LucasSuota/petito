import FirebaseAuthContext from "@/context/FirebaseAuthContext";
import PagesTransition from "@/transition/PagesTransition";
import Link from "next/link";

const Home = () => {
  return (
    <FirebaseAuthContext>
      <PagesTransition>
        <Link href={"/"}>Home</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/login"}>Login</Link>
      </PagesTransition>
    </FirebaseAuthContext>
  );
};

export default Home;
