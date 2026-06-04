"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createMessage(formData: FormData) {
  const name  = String(formData.get("name")  ?? "");
  const email = String(formData.get("email") ?? "");
  const message  = String(formData.get("message")  ?? "");

  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  await prisma.message.create({
    data: { name, email, message },
  });
}