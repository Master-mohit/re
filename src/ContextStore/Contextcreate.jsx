import React, { createContext, useState } from 'react'
export const mycontext = createContext();


const Contextcreate = ({children}) => {
    const [multiple, setmultiple] = useState(4)
  return (
    <div>
        <mycontext.Provider value={{multiple, setmultiple}}>
            {children}
        </mycontext.Provider>
    </div>
  )
}

export default Contextcreate
