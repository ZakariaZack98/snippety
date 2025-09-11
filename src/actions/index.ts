"use server";

import { prisma } from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createSnippet = async (
  messageState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    if (typeof title !== "string" || title.length == 0) {
      return { message: "Please input a valid title" };
    }

    if (typeof code !== "string" || code.length == 0) {
      return { message: "Please input a valid code" };
    }

    await prisma.snippet.create({
      data: { title, code },
    });
    revalidatePath('/')
  } catch (error: any) {
    return { message: error.message };
  }
  redirect("/");
};

export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({ where: { id }, data: { code } });
  console.log(code);
  revalidatePath(`/snippet/${id}`);
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({ where: { id } });
  revalidatePath('/');
  redirect(`/`);
};
