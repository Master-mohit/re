import React, { useState } from 'react'

const Usestate = () => {
    const [count, setcount] = useState(0)
    const countHandler = () => {
        setcount (count + 1);
    }
  return (
    <div className='w-full h-full flex items-center justify-center bg-black'>
      <div className='flex items-center justify-center flex-col text-white gap-9'>
        <h1 className='text-7xl font-semibold'>{count}</h1>
        <button onClick={countHandler} className='text-4xl'>Count❕</button>
      </div>
    </div>
  )
}

export default Usestate
