import { UserContext } from "@/context/FirebaseAuthContext";
import UserProfilePhoto from "./components/UserProfilePhoto";
import { useContext } from "react";

const MyProfile = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="w-full h-dvh flex items-center justify-center flex flex-col">
      <div className="w-full p-4 h-dvh">
        <div className="flex flex-col text-center gap-4 mt-10 items-center justify-center">
          <UserProfilePhoto />
          <div className="text-center">
            <p className="text-2xl font-bold">
              {userContext.state.user?.displayName}
            </p>
            <p className="text-sm">{userContext.state.user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
