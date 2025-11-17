import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { userAuthContext } from '../../contextAPI/AuthContext'
import { useContext } from 'react'


function AdminHeader() {
  const { role, setRole, authorisedUser, setAuthorisedUser} = useContext(userAuthContext)
  const navigate = useNavigate()
   const logout = ()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    navigate('/')
  }
  return (
    <>
      <div className='flex justify-between p-3 bg-[#CFCDB6]'>
        <div className='flex justify-center items-center '>
          
          <h1 className=' font-bold ' style={{color:"rgba(66, 65, 51, 1)"}}>EduCore</h1>
        </div>
        <button onClick={logout} className='flex items- hover:bg-black hover:text-white justify-center items-center  px-1 py-2 rounded bg-[#727057]'>
          
               <FontAwesomeIcon icon={faPowerOff} /> LOGOUT 
          
        </button>
      </div>
      <div className="bg-black flex justify-center">
  <p className="text-white p-3 animate-pulse">
    Welcome, Admin! You're all set to manage and monitor the system. Let’s get to work!
  </p>
</div>


    </>
  )
}

export default AdminHeader