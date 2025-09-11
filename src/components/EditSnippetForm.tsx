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

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);

  return (
    <div className='flex flex-col gap-4'>
      <form action={saveSnippetAction} className='flex flex-col justify-between items-center gap-x-20'>
        <h1 className="text-3xl">Your Code Editor</h1>
        <textarea value={code} className='border' onChange={e => changeEventHandler(e.target.value)}/>
        <Button type='submit'>Save</Button>
      </form>
    </div>
  )
}

export default EditSnippetForm