'use client'
import { saveSnippet } from '@/actions';
import type { Snippet } from '@prisma/client'
import React, { useState } from 'react'
import { Button } from './ui/button';

function EditSnippetForm({snippet}: {snippet: Snippet}) {
  const [code, setCode] = useState(snippet.code);

  const changeEventHandler = (value: string = '') => {
    setCode(value)
  }

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, snippet.code)

  return (
    <div className='flex flex-col gap-4'>
      <form action={saveSnippetAction} className='flex justify-between items-center'>
        <h1 className="text-3xl">Your Code Editor</h1>
        <Button type='submit'>Save</Button>
      </form>
    </div>
  )
}

export default EditSnippetForm