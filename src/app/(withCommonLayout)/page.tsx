import Video from "@/myComponents/shared/Video";
import AboutMe from "@/myComponents/uiComponent/AboutMe";
import Form from "@/myComponents/uiComponent/Form";
import HireMe from "@/myComponents/uiComponent/HireMe";
import HomeBlogs from "@/myComponents/uiComponent/HomeBlogs";
import HomeProjects from "@/myComponents/uiComponent/HomeProjects";
import Services from "@/myComponents/uiComponent/Services";
import Skills from "@/myComponents/uiComponent/Skills";
import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Athkia Adiba Tonne | Home",
  description:
    "Athkia Adiba Tonne – a passionate Full-Stack developer specializing in Next.js, TypeScript, Node.js, Express, MongoDB, Mongoose, and Redux. Crafting dynamic and scalable web applications with a focus on performance and user experience.",
};

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Video session={session}></Video>
      <div id="aboutMe">
        <AboutMe />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <HomeProjects />
      </div>
      <div id="contact">
        <Form />
      </div>
      <div id="hireMe">
        <HireMe />
      </div>
      <div id="blogs">
        <HomeBlogs />
      </div>
    </div>
  );
};

export default HomePage;
