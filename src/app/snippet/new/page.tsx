import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { prisma } from "@/lib/prismaClient";
import { redirect } from "next/navigation";

export default function CreateSnippetPage() {

  const createSnippet = async (formData: FormData) => {
    'use server'
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    
    const snippet = await prisma.snippet.create({
      data: {title, code}
    })

    console.log('created snippet: ', snippet);
    redirect('/');
    
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form className="w-2xl" action={createSnippet}>
        <div>
          <Label>Title:</Label>
          <Input type="text" name="title" id="title"/>
        </div>
        <div>
          <Label>Code:</Label>
          <Input type="text" name="code" id="code"/>
        </div>
        <Button type="submit" className="my-4">New</Button>
      </form>
    </div>
  );
}
