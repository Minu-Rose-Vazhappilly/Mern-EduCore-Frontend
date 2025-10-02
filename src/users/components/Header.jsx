
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'




function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>

      <nav style={{backgroundColor:"rgba(237, 231, 215, 0.41)"}} className='flex items-center  md:justify-between p-4 '>
        <div>
          {/* <img src="./logo.png" alt="" width={"40px"} /> */}
          <div style={{color:"rgba(109, 100, 68, 1)"}} className='text-2xl font-bold ms-3 '>EduCore</div>

        </div>
        {/* <div className='text-2xl font-bold ms-3'>EduCore</div> */}
        <div className='hidden md:flex items-center justify-center '>
          <FontAwesomeIcon  icon={faInstagram} />
        <FontAwesomeIcon className='ms-3' icon={faTwitter} />
        <FontAwesomeIcon className='ms-3' icon={faFacebook} />
        {/* login */}
        <Link to='/login'><FontAwesomeIcon className='ms-3' icon={faCircleUser} style={{height:"25px",width:"25px"}} /></Link>
        
        </div>
      </nav>
      <nav style={{backgroundColor:"rgba(109, 100, 68, 1)"}}>
        <div className='md:hidden flex items-center justify-between p-3 text-white'>
          <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} />
          <Link to='/login'><FontAwesomeIcon className='ms-3' icon={faCircleUser} style={{height:"25px",width:"25px"}} /></Link>
        </div>
        {isOpen && (
          <div className='flex flex-col  justify-center  text-white md:hidden p-3'>
            <Link className='mb-2' to={'/'}>Home</Link>
            <Link className='mb-2' to={'/all-courses'}>Courses</Link>
            <Link className='mb-2' to={'/careers'}>Careers</Link>
            <Link className='mb-2' to={'/contact'}>Contact</Link>
          </div>
        )}
        <nav className='hidden md:flex items-center justify-center  p-3 text-white'>
            <Link  to={'/'}>Home</Link>
            <Link className='ms-4 ' to={'/all-courses'}>Courses</Link>
            <Link className='ms-4 ' to={'/careers'}>Careers</Link>
            <Link className='ms-4' to={'/contact'}>Contact</Link>
        </nav>
      </nav>
      
    </div>
  )
}

export default Header