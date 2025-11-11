import React, { createContext, useState } from 'react'
export const searchCourseContext = createContext("")

function ContextShare({children}) {
    const [searchKey,setSearchKey] = useState("")

  return (
    <div>
       <searchCourseContext.Provider value={{searchKey,setSearchKey}}>
        {children}
       </searchCourseContext.Provider>
    </div>
  )
}

export default ContextShare