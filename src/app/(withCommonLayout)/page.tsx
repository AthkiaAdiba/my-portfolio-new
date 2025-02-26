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
      <div id="aboutMe">
        <AboutMe></AboutMe>
      </div>
      <div id="services">
        <Services></Services>
      </div>
      <div id="skills">
        <Skills></Skills>
      </div>
      <div id="projects">
        <HomeProjects></HomeProjects>
      </div>
      <div id="contact">
        <Form></Form>
      </div>
      <div id="hireMe">
        <HireMe></HireMe>
      </div>
    </div>
  );
};

export default HomePage;
