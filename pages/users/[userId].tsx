import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import Header from "@/components/layout/Header";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import UserBio from "@/components/users/UserBio";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fechedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fechedUser) {
    return (
      <div
        className="
            flex
            justify-center
            items-center
            h-full
        "
      >
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label={fechedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
    </>
  );
};

export default UserView;
