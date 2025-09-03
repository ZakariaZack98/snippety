import EditSnippetForm from '@/components/EditSnippetForm';
import { prisma } from '@/lib/prismaClient';
import React from 'react'


async function EditPage({params}: {params: Promise<{id: string}>}) {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({where: {id}});
  if(!snippet) return <h1>Snippet not found</h1>
  return (
    <EditSnippetForm snippet={snippet}/>
  )
}

export default EditPage