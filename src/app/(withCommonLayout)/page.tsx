import Video from "@/myComponents/shared/Video";
import AboutMe from "@/myComponents/uiComponent/AboutMe";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Video session={session}></Video>
      <AboutMe></AboutMe>
    </div>
  );
};

export default HomePage;
