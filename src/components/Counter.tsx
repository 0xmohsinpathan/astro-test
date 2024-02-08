'use client'

import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState<number>(0)
  console.log("🚀 ~ Counter ~ count:", count)
  return (
    <div className="flex items-center justify-center">
      <button onClick={() => setCount(count - 1)} className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-lg h-[60px]">
        -
      </button>
      <h1 className="m-4">{count}</h1>
      <button onClick={() => setCount(count + 1)} className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
        +
      </button>
    </div>
  )
}

export default Counter