import { TFetchedProject } from "@/types/projectType";
import { getAllProject } from "@/utils/actions/project";
import HomeProjectCard from "./HomeProjectCard";

const HomeProjects = async () => {
  const projectsData = await getAllProject();
  const projects = projectsData?.data;

  return (
    <div className="bg-[#22252c] pb-44">
      <h4
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="pt-48 pb-16 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00f298] to-[#07f7f7] text-center aos-init"
      >
        SOME OF MY PROJECTS
      </h4>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 197, 0.7), rgba(0, 255, 197, 0.7)), url(/port-bg.jpg)`,
        }}
        className="w-full bg-no-repeat h-full bg-cover bg-center"
      >
        <div className="px-2 lg:px-[4%] xl:px-[13%] mx-auto py-32">
          {projects?.slice(0, 3).map((project: TFetchedProject) => (
            <HomeProjectCard
              key={project._id}
              project={project}
            ></HomeProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
