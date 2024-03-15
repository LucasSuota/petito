import { UserContext } from "@/context/FirebaseAuthContext";
import UserProfilePhoto from "./components/UserProfilePhoto";
import { useContext } from "react";
import SignOutComponent from "./components/SignOutComponent";

const MyProfile = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="w-full h-dvh flex items-center justify-center flex flex-col">
      <div className="w-full p-4 h-dvh">
        <div className="flex sm:flex-row flex-col text-center sm:gap-10 gap-4 mt-10 items-center justify-center">
          <UserProfilePhoto />
          <div className="sm:text-start text-center">
            <p className="text-4xl sm:text-5xl font-bold">
              {userContext.state.user?.displayName}
            </p>
            <p className="text-xl">{userContext.state.user?.email}</p>
          </div>
        </div>
        <SignOutComponent />
      </div>
    </div>
  );
};

export default MyProfile;
