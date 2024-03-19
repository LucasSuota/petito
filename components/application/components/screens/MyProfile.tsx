import { UserContext } from "@/context/FirebaseAuthContext";
import UserProfilePhoto from "./components/UserProfilePhoto";
import { useContext } from "react";
import SignOutComponent from "./components/SignOutComponent";
import PopUpSuccessMessage from "@/components/layout/popUp/PopUpSucessMessage";

const MyProfile = () => {
  const userContext = useContext(UserContext);

  return (
    <main>
      <PopUpSuccessMessage />
      <div className="w-full h-dvh flex items-center justify-center flex flex-col">
        <div className="w-full h-dvh">
          <div className="flex h-full flex-col text-center sm:gap-10 gap-4 items-center justify-center">
            <UserProfilePhoto />
            <div className="text-center">
              <p className="text-xl">{userContext.state.user?.email}</p>
            </div>
            <SignOutComponent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyProfile;
