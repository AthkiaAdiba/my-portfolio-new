"use client";

import { Button } from "@/components/ui/button";
import { TFetchedProject } from "@/types/projectType";
import { deleteProject } from "@/utils/actions/project";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const ProjectCart = ({ project }: { project: TFetchedProject }) => {
  const handleDeleteProject = async (projectId: string) => {
    const toastId = toast.loading("Deleting Project..", { duration: 2000 });

    try {
      // Call the API or function responsible for deleting the project
      const res = await deleteProject(projectId);

      if (!res.success) {
        toast.error(res?.message, { id: toastId });
      } else if (res.success) {
        toast.success(res?.message, { id: toastId });
      }
    } catch (error) {
      toast.error("An error occurred while deleting the project.");
      console.error(error);
    }
  };

  return (
    <div className="flex">
      <div className="shadow-md dark:bg-gray-50 text-black dark:text-gray-800">
        <Image
          src={
            project?.image[0] ||
            "https://res.cloudinary.com/dv6fgvj2c/image/upload/v1738848037/aw31zjonlmq96og1bm3k.png"
          }
          alt="project image"
          width={200}
          height={200}
          className="w-full h-[250px] bg-gray-500 dark:bg-gray-500"
        />
        <div className="flex-grow p-6 space-y-5">
          <h2 className="text-3xl font-semibold tracking-wide">
            {project?.projectName}
          </h2>
          <p className="dark:text-gray-800">
            {project?.projectDescription.slice(0, 100)}
            <Link
              href={`/dashboard/admin/projects/${project._id}`}
              className="underline font-semibold"
            >
              Read more
            </Link>
          </p>
          <div className="flex justify-end">
            <Button
              onClick={() => handleDeleteProject(project._id)}
              className="mt-5 p-3 font-semibold tracking-wide rounded-none text-white dark:bg-black"
            >
              Delete Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;
