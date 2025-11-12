import React from 'react'
import Header from "../components/Header"
import Footer from "../../components/Footer"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom'
import { verifyPaymentAPI } from '../../services/allAPI'
import { useEffect } from 'react'
function PaymentSuccess() {
    const [searchParams] = useSearchParams();
  const session_id = searchParams.get('session_id');
  console.log(session_id);
  
useEffect(() => {
    if (session_id) {
      verifyPayment()
    }
  }, [session_id]);

  const verifyPayment = async()=>{
    const token = sessionStorage.getItem("token");
const reqHeader = {
  "Authorization": `Bearer ${token}`
};

try{const res = await verifyPaymentAPI(session_id, reqHeader);
console.log("Payment verified:", res.data);}catch(err){
    console.log(err);
    
}
  }

  return (
    <div>
        <Header/>
        <div className='container my-10 flex justify-center items-center'>
            <div className="md:grid grid-cols-2 px-20 justify-center items-center">
               <p>
                    <h1 className='md:text-4xl text-blue-600'>Congratualtions ...</h1>
                    <p className="text-2xl my-4">Thank you for purchasing with EduCore.Hope you have a good time with us</p>
                    <Link to={'/all-courses'} className='bg-blue-800 px-4 py-3 my-5 text-white'><FontAwesomeIcon icon={faBackward}/>EXPLORE MORE COURSES</Link>
               </p>
            </div>
            <div className='flex justify-center items-center'>

                <img width={"700px"} height={"700px"} src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif" alt="success" />

            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default PaymentSuccess