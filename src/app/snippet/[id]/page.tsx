import { deleteSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prismaClient";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import SnippetNotFound from "./not-found";

async function SnippetViewPage({ params }: { params: { id: string } }) {
  const {id} = await params;
  const deleteAction = deleteSnippet.bind(null, parseInt(id));
  const snippet = await prisma.snippet.findUnique({ where: { id: parseInt(id) } });
  if(!snippet) notFound(); //!check
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl">
        <h3 className="text-2xl bold">{snippet?.title}</h3>
        <pre className="my-10"><code className="p-5 border rounded-xl my-5">{snippet?.code}</code></pre>
      </div>
      <div className="flex gap-x-3 my-2">
        <Link href={`/snippet/${id}/edit`}><Button className="bg-green-500">Edit</Button></Link>
        <Button className="bg-red-500" onClick={deleteAction}>Delete</Button>
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
