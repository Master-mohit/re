import React, { useContext, useState } from 'react'
import { mycontext } from '../ContextStore/Contextcreate';

const Context = () => {
    const {multiple, setmultiple} = useContext(mycontext)

     
    const tableHandler = () => {
        setmultiple (multiple * 2);
    }
  return (
    <div className='w-100 bg-black '>
      <div className='gap-12 flex-col flex items-center justify-center p-10 text-white'>
        <h1 className='text-6xl font-semibold'>{multiple}</h1>
        <button onClick={tableHandler} className='text-3xl border rouded p-2'>table</button>
      </div>
    </div>
  )
}

export default Context
