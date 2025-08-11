/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
      cache: "no-store",
    });

    const blogData = await res.json();

    return blogData;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSingleBlog = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`, {
      cache: "no-store",
    });

    const blogData = await res.json();

    return blogData;
  } catch (error: any) {
    return Error(error);
  }
};
