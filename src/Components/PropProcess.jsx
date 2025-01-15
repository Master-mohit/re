import React, { useState } from 'react'
import Passingporps from './Passingporps';

const PropProcess = () => {
    const [multi, setmulti] = useState(2)

    const multiHandler = () => {
        setmulti(multi * 2);
    }
  return (
    <div className='p-10 text-white gap-12 flex items-center justify-center flex-col'>
    <Passingporps pass={multi}/>
    <button onClick={multiHandler} className='text-4xl p-5 border'>Multiply</button>
  </div>
  )
}

export default PropProcess
