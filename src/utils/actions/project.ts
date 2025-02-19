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
      cache: "no-store",
    }
  );

  const projectData = await res.json();

  return projectData;
};

export const getAllProject = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    cache: "no-store",
  });

  const projectsData = await res.json();

  return projectsData;
};

export const getSingleProject = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
    cache: "no-store",
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
      cache: "no-store",
    }
  );

  const projectData = await res.json();

  return projectData;
};

export const deleteProject = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });

  const projectData = await res.json();

  return projectData;
};
