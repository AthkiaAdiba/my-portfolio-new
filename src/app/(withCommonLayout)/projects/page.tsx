import ProjectsAndBlogsBanner from "@/myComponents/shared/ProjectsAndBlogsBanner";
import { TFetchedProject } from "@/types/projectType";
import { getAllProject } from "@/utils/actions/project";
import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const metadata: Metadata = {
  title: "Athkia Adiba Tonne | Projects",
  description:
    "Explore the web development projects of Athkia Adiba Tonne, featuring full-stack applications built with Next.js, TypeScript, Node.js, Express, MongoDB, Mongoose, and Redux. Showcasing dynamic, scalable, and user-friendly solutions for modern web experiences.",
};

const ProjectsPage = async () => {
  const session = await getServerSession(authOptions);
  const projectsData = await getAllProject();
  const projects = projectsData?.data;

  return (
    <div>
      <ProjectsAndBlogsBanner session={session}></ProjectsAndBlogsBanner>
      <div className="min-h-screen px-2 lg:px-[13%] bg-[#22252c]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-24">
          {projects?.map((project: TFetchedProject) => (
            <div
              key={project?._id}
              className="bg-[#313741] flex flex-col h-full"
            >
              <Image
                className="h-[250px]"
                src={project?.image[0]}
                alt="project image"
                width={500}
                height={800}
              />

              <div className="p-6 flex flex-col flex-grow">
                <h1 className="text-[#00d7bb] text-3xl font-semibold">
                  {project?.projectName}
                </h1>
                <p className="text-slate-400 mt-3 mb-5">
                  {project?.projectDescription}
                </p>
                <Link href={`/projects/${project?._id}`} className="mt-auto">
                  <button className="px-5 py-3 text-center text-white hover:text-black transition duration-300 hover:from-[#1fb385] hover:to-[#24dfde] ease bg-gradient-to-br from-[#1fb385] to-[#24dfde] md:w-auto">
                    <p className="flex items-center gap-2">
                      READ MORE <IoIosArrowForward />
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
