import ProjectsAndBlogsBanner from "@/myComponents/shared/ProjectsAndBlogsBanner";
import SwiperCard from "@/myComponents/uiComponent/SwiperCard";
import { TFetchedProject } from "@/types/projectType";
import { getSingleProject } from "@/utils/actions/project";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

// or Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const projectData = await getSingleProject(id);
  const project = projectData?.data;

  return {
    title: project.projectName,
    description: project.projectDescription,
  };
}
// flex flex-col xl:flex-row gap-6
const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const session = await getServerSession(authOptions);
  const { id } = await params;

  const projectData = await getSingleProject(id);
  const project: TFetchedProject = projectData?.data;

  return (
    <div>
      <ProjectsAndBlogsBanner session={session}></ProjectsAndBlogsBanner>
      <div className="min-h-screen px-2 lg:px-[13%] bg-[#22252c]">
        <div className="pt-24 pb-16">
          <div className="h-[600px] w-full">
            <SwiperCard images={project?.image}></SwiperCard>
          </div>
          <div className="space-y-3 mt-8">
            <h1 className="text-4xl font-bold text-[#00d7bb]">
              {project?.projectName}
            </h1>
            <p className="text-lg text-slate-400">
              {project?.projectDescription}
            </p>

            <div>
              <p className="text-xl font-semibold text-[#00d7bb]">Features:</p>
              {project?.features.map((list: string, index: number) => (
                <p
                  key={index}
                  className="text-base lg:text-lg flex items-start gap-5"
                >
                  <span className="inline-block">
                    <IoIosArrowForward className="text-[#00d7bb]" />
                  </span>
                  <span className="inline-block text-white">{list}</span>
                </p>
              ))}
            </div>

            <p className="flex gap-4 text-base lg:text-lg text-white">
              <GrTechnology className="text-7xl md:text-2xl xl:text-5xl text-[#00d7bb]" />
              {project?.technologies}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mt-5 text-[#00d7bb]">
              <Link href={project?.liveLink} target="_blank">
                <p className="flex text-start items-center gap-2 text-base lg:text-lg font-semibold">
                  <FaLink className="text-[#00d7bb]" /> Live Link
                </p>
              </Link>
              <Link href={project?.serverCodeLink} target="_blank">
                <p className="flex items-center gap-2 text-base lg:text-lg font-semibold">
                  <FaLink className="text-[#00d7bb]" /> Server Code Link
                </p>
              </Link>
              <Link href={project?.clientCodeLink} target="_blank">
                <p className="flex items-center gap-2 text-base lg:text-lg font-semibold">
                  <FaLink className="text-[#00d7bb]" /> Client Code Link
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
