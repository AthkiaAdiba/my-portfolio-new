import { getSingleProject } from "@/utils/actions/project";
import SwiperCard from "@/myComponents/uiComponent/SwiperCard";
import { IoIosArrowForward } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import UpdateProjectModal from "@/myComponents/modals/UpdateProjectModal";
import { TFetchedProject } from "@/types/projectType";

// or Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const projectData = await getSingleProject(projectId);
  const project = projectData?.data;

  return {
    title: project.projectName,
    description: project.projectDescription,
  };
}

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const projectData = await getSingleProject(projectId);
  const project: TFetchedProject = projectData?.data;

  return (
    <div className="flex flex-col lg:flex-row lg:gap-6 lg:pr-10">
      <div className="h-[600px] w-[600px]">
        <SwiperCard images={project?.image}></SwiperCard>
      </div>
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">{project?.projectName}</h1>
        <p className="text-lg">{project?.projectDescription}</p>

        <div>
          <p className="text-xl font-semibold">Features:</p>
          {project?.features.map((list: string, index: number) => (
            <p key={index} className="text-lg flex items-start gap-5">
              <span className="inline-block">
                <IoIosArrowForward className="text-gray-900 dark:text-white" />
              </span>
              <span className="inline-block">{list}</span>
            </p>
          ))}
        </div>

        <p className="flex gap-4 text-lg">
          <GrTechnology className="text-3xl text-gray-900 dark:text-white" />
          {project?.technologies}
        </p>

        <div className=" flex items-center gap-10 mt-5">
          <Link href={project?.liveLink} target="_blank">
            <p className="flex items-center gap-2 text-lg font-semibold">
              <FaLink className="text-gray-900 dark:text-white" /> Live Link
            </p>
          </Link>
          <Link href={project?.serverCodeLink} target="_blank">
            <p className="flex items-center gap-2 text-lg font-semibold">
              <FaLink className="text-gray-900 dark:text-white" /> Server Code
              Link
            </p>
          </Link>
          <Link href={project?.clientCodeLink} target="_blank">
            <p className="flex items-center gap-2 text-lg font-semibold">
              <FaLink className="text-gray-900 dark:text-white" /> Client Code
              Link
            </p>
          </Link>
        </div>

        <div>
          <UpdateProjectModal projectId={project?._id}></UpdateProjectModal>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
