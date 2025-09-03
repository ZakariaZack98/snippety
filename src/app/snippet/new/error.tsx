'use client'
import React from 'react'

type ErrorPageProps = {
  error: Error
}

function error({error}: ErrorPageProps) {
  return (
    <div>{error.message}</div>
  )
}

export default error