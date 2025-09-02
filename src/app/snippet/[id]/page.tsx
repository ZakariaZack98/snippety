import { prisma } from "@/lib/prismaClient";
import React from "react";

async function SnippetViewPage({ params }: { params: { id: string } }) {
  const {id} = await params;
  const snippet = await prisma.snippet.findUnique({ where: { id: parseInt(id) } });
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl">
        <h3 className="text-2xl bold">{snippet?.title}</h3>
        <p className="p-5 border rounded-xl my-5">{snippet?.code}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await prisma.snippet.findMany();
  if (snippets.length > 0) {
    return snippets.map((snippet) => ({ id: snippet.id.toString() }));
  }
  return [];
}

export default SnippetViewPage;
