import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import Edit from '../components/Edit'
import { userUpdateContext } from '../../contextAPI/ContextShare'
import SERVERURL from '../../services/serverURL'


function Profile() {
  const {userEditResponse} = useContext(userUpdateContext)
   const [username,setUsername] = useState("")
  const [userDP,setUserDP] = useState("")
  const [token,setToken] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem('token'))
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUsername(user.username)
        setUserDP(user.profile)

    }
  },[userEditResponse])


  return (
    <div>
      <Header/>
      <div className='bg-black' style={{height:'200px'}}></div>
      <div className="bg-white p-3 " style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}}>
       <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src={userDP==""?"https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png":userDP.startsWith("https://lh3.googleusercontent.com/")?userDP:`${SERVERURL}/uploads/${userDP}`} alt="profile" />
      </div>
      
      {/* Username + Edit */}
      <div className='md:flex justify-between px-30 mt-5'>
        <div className='flex justify-center items-center'>
          <h1 className='font-bold text-2xl'>{username}</h1>
          <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400  ms-3'/>
        </div>
        <Edit/>
      </div>
      
      {/* About section */}
      <p className='md:px-20 px-5 my-5 text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda in pariatur similique quae minima beatae. Distinctio, omnis adipisci cum ipsum voluptatem perspiciatis quos, quia asperiores accusamus dolorem itaque culpa?
      </p>

      {/* Tabs */}
      
      <Footer/>
    </div>
  )
}

export default Profile
