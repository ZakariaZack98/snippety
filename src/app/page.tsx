import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prismaClient";
import Link from "next/link";

export default async function Home() {

  const snippets = await prisma.snippet.findMany();
  if(!snippets || snippets.length == 0) {
    return <p>No snippets found</p>
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h3 className="text-2xl bold">Snippet Lists:</h3>\
      {
        snippets?.map(snippet => (
          <div key={snippet.id} className="border rounded-xl p-4 flex gap-x-10 items-center">
            <strong>Title: {snippet.title}</strong>
            <Link href={`/snippet/${snippet.id}`}><Button>View Snippet</Button></Link>
          </div>
        ))
      }
    </div>
  );
}
