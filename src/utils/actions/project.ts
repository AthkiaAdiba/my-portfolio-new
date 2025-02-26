/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TProject } from "@/types/projectType";

export const createProject = async (data: TProject) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/projects/create-project`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const projectData = await res.json();

  return projectData;
};

export const getAllProject = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    next: {
      revalidate: 30,
    },
  });

  const projectsData = await res.json();

  return projectsData;
};

export const getSingleProject = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
    next: {
      revalidate: 30,
    },
  });

  const projectData = await res.json();

  return projectData;
};

export const updateProject = async (data: any) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/projects/${data.projectId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.data),
    }
  );

  const projectData = await res.json();

  return projectData;
};

export const deleteProject = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
    method: "DELETE",
  });

  const projectData = await res.json();

  return projectData;
};
