import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

function Profile() {
  
  

  return (
    <div>
      <Header/>
      <div className='bg-black' style={{height:'200px'}}></div>
      <div className="bg-white p-3 " style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}}>
        <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png" alt="profile" />
      </div>
      
      {/* Username + Edit */}
      <div className='md:flex justify-between px-30 mt-5'>
        <div className='flex justify-center items-center'>
          <h1 className='font-bold text-2xl'>Student Name</h1>
          <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400  ms-3'/>
        </div>
        <div>Edit</div>
      </div>
      
      {/* About section */}
      <p className='md:px-20 px-5 my-5 text-justify'>
        Welcome to your learning dashboard. Here you can manage your enrolled courses, track your progress, 
        and access certificates for completed courses. Keep learning and growing your skills!
      </p>

      {/* Tabs */}
      
      <Footer/>
    </div>
  )
}

export default Profile
