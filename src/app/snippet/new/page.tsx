'use client'
import { createSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";

export default function CreateSnippetPage() {

  const [formActionData, createSnippetAction] = useActionState(createSnippet, {message: ''})

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <form className="w-2xl" action={createSnippetAction}>
        <div>
          <Label>Title:</Label>
          <Input type="text" name="title" id="title"/>
        </div>
        <div>
          <Label>Code:</Label>
          <Input type="text" name="code" id="code"/>
        </div>
        {formActionData.message && <div className="my-2 bg-red-200 border-red-600">{formActionData.message}</div>}
        <Button type="submit" className="my-4">New</Button>
      </form>
    </div>
  );
}
