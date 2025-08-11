/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
      next: {
        tags: ["skills"],
      },
    });

    const skillsData = await res.json();

    return skillsData;
  } catch (error: any) {
    return Error(error);
  }
};
