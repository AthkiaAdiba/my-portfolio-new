/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllProject = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
      next: {
        tags: ["projects"],
      },
    });

    const projectsData = await res.json();

    return projectsData;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleProject = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`,
      {
        next: {
          tags: ["projects"],
        },
      }
    );

    const projectData = await res.json();

    return projectData;
  } catch (error: any) {
    return Error(error);
  }
};
