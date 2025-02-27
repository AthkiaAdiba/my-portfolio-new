/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TBlog } from "@/types/projectType";

export const createBlog = async (data: TBlog) => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs/create-blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const blogData = await res.json();

  return blogData;
};

export const getAllBlogs = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    next: {
      revalidate: 30,
    },
  });

  const blogData = await res.json();

  return blogData;
};

export const getSingleBlog = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
    next: {
      revalidate: 30,
    },
  });

  const blogData = await res.json();

  return blogData;
};

export const updateBlog = async (data: any) => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs/${data.blogId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data.data),
  });

  const blogData = await res.json();

  return blogData;
};

export const deleteBlog = async (id: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
    method: "DELETE",
  });

  const blogData = await res.json();

  return blogData;
};
