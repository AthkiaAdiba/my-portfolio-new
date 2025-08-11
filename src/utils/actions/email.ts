/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TEmail } from "@/types/projectType";
import { revalidateTag } from "next/cache";

export const createEmail = async (data: TEmail) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/emails/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const emailData = await res.json();

    revalidateTag("emails");

    return emailData;
  } catch (error: any) {
    return Error(error);
  }
};
