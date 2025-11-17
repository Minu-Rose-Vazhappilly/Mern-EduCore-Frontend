import React, { createContext, useEffect, useState } from 'react'

export const userAuthContext = createContext("")


function AuthContext({children}) {
    const [role,setRole] = useState("")
    const [authorisedUser,setAuthorisedUser] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("user") && sessionStorage.getItem("token")){
            const user = JSON.parse(sessionStorage.getItem("user"))
            setRole(user.role)
            setAuthorisedUser(true)
        }
    },[role])
  return (
    <>
    <userAuthContext.Provider value={{role,setRole,authorisedUser,setAuthorisedUser}}>
        {children}
    </userAuthContext.Provider>
    </>
  )
}

export default AuthContext