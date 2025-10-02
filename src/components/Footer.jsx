import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div className='text-white'>
        <div className='md:grid grid-cols-3 p-3 ' style={{backgroundColor:"rgba(109, 100, 68, 1)"}}>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-bold text-2xl'>EduCore</h1>
                <p>Invest in knowledge. It pays the best interest</p>
            </div>
            <div className='flex justify-center md:items-center flex-col md:p-0 p-5'>
                <ul style={{listStyleType:"disc"}}>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Plans</li>
                    <li>Faqs</li>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='flex md:justify-center items-center md:p-0 p-1'>
        <FontAwesomeIcon  icon={faInstagram} />
        <FontAwesomeIcon className='ms-3' icon={faTwitter} />
        <FontAwesomeIcon className='ms-3' icon={faFacebook} />
            </div>

        </div>
    </div>
  )
}

export default Footer