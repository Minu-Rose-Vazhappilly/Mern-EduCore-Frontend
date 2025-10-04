import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../../components/Footer'

function Contact() {
  return (
    <div>
      <Header/>
      <div className='md:grid grid-cols-3 gap-3 p-10'>
        <div className='col-span-1'>
          <h1 className='text-center text-3xl font-bold'>Contact Us</h1>
        </div>
        <div className='col-span-2'>
          <p className='text-xl'>
            Learning is easier when you’re not alone—connect with us and let’s make your journey smoother.
          </p>
        </div>

      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6  p-10 bg-[#EDE7D7] w-full flex items-center ">
            <div className="bg-[#CBC095] md:mx-35 rounded-lg flex flex-col justify-center items-center py-5  w-full max-w-[350px] aspect-[5/4] mx-auto " >
              <h1 className='text-center mb-8 mt-3'>Send me message</h1>
              <form action="" className="w-full px-5  ">
                <input
                  type="text"
                  className="w-full bg-white p-1  rounded"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="w-full bg-white p-1 mt-1 rounded"
                  placeholder="Email ID"
                />
                <textarea
                  type="text"
                  rows={"3"}
                  className="w-full bg-white p-1 mt-1 rounded"
                  placeholder="Message"
                />
              </form>
              <Link className="bg-black text-white md:w-80 w-64 text-center mb-3 p-1 mt-3 rounded-lg">Send</Link>
            </div>
            <div className='w-full max-w-[350px] aspect-[5/4] md:mx-auto '><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.54195915393!2d76.30948081921879!3d10.008897991762499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1758719082801!5m2!1sen!2sin" className='w-full h-full rounded-lg' style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          </div>
      <div className='md:grid grid-cols-3 gap-3 p-10'>
        <div className='col-span-1'>
          <h1 className='text-center text-3xl font-bold'>Privacy Enquiries</h1>
        </div>
        <div className='col-span-2'>
          <p className='text-xl'>
            If you have questions about our Privacy Notice or an enquiry about how we protect your personal information, you can contact us at privacy@edu_core.org.
          </p>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Contact