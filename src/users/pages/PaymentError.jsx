import React from 'react'
import Header from "../components/Header"
import Footer from "../../components/Footer"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

function PaymentError() {
  return (
    <div>
         <div>
        <Header/>
        <div className='container my-10 flex justify-center items-center'>
            <div className="md:grid grid-cols-1 px-20 justify-center items-center">
               <p>
                    <h1 className='md:text-4xl text-blue-600'>Sorry! Payment Failed</h1>
                    <p className="text-2xl my-4">We appologize for the inconvience caused and appreciate your visit to EduCore...</p>
                    <Link to={'/all-courses'} className='bg-blue-800 px-4 py-3 my-5 text-white'><FontAwesomeIcon icon={faBackward}/>EXPLORE MORE COURSES</Link>
               </p>
            </div>
            <div className='flex justify-center items-center'>

                <img width={"700px"} height={"700px"} src="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1" alt="success" />

            </div>

        </div>
        <Footer/>
    </div>
    </div>
  )
}

export default PaymentError