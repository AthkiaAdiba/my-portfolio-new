"use server";

import { TEmail } from "@/types/projectType";

export const createEmail = async (data: TEmail) => {
  const res = await fetch(`${process.env.BACKEND_URL}/emails/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const emailData = await res.json();

  return emailData;
};

export const getAllEmails = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/emails`, {
    cache: "no-store",
  });

  const emailData = await res.json();

  return emailData;
};
