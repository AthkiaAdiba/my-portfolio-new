import AddProjectModal from "@/myComponents/modals/AddProjectModal";
import ProjectCart from "@/myComponents/uiComponent/ProjectCart";
import { TFetchedProject } from "@/types/projectType";
import { getAllProject } from "@/utils/actions/project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athkia Adiba Tonne | Projects",
  description:
    "Explore the web development projects of Athkia Adiba Tonne, featuring full-stack applications built with Next.js, TypeScript, Node.js, Express, MongoDB, Mongoose, and Redux. Showcasing dynamic, scalable, and user-friendly solutions for modern web experiences.",
};

const DashboardProjectsPage = async () => {
  const projectsData = await getAllProject();
  const projects = projectsData?.data;

  return (
    <div className="lg:px-14 pb-10">
      <div className="flex justify-end">
        <AddProjectModal />
      </div>
      {/* table */}

      <div>
        <h1 className="text-4xl font-bold pb-10 text-center">All Products</h1>
        <div className="mr-2 lg:mr-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 gap-5">
            {projects.map((project: TFetchedProject) => (
              <ProjectCart key={project._id} project={project}></ProjectCart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProjectsPage;
