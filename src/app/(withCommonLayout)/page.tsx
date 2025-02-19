import Video from "@/myComponents/shared/Video";
import AboutMe from "@/myComponents/uiComponent/AboutMe";
import Form from "@/myComponents/uiComponent/Form";
import HireMe from "@/myComponents/uiComponent/HireMe";
import HomeProjects from "@/myComponents/uiComponent/HomeProjects";
import Services from "@/myComponents/uiComponent/Services";
import Skills from "@/myComponents/uiComponent/Skills";
import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Athkia Adiba Tonne",
};

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Video session={session}></Video>
      <AboutMe></AboutMe>
      <Services></Services>
      <Skills></Skills>
      <HomeProjects></HomeProjects>
      <Form></Form>
      <HireMe></HireMe>
    </div>
  );
};

export default HomePage;
