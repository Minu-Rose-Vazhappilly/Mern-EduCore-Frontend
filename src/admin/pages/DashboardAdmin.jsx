import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'

function DashboardAdmin() {
  return (
    <div>
      <AdminHeader/>
      
       <div className='md:grid grid-cols-4 gap-2'>
        <div className='col-span-1'><AdminSideBar /></div>

        <div className='col-span-3 p-8 '>
         <div className="md:grid grid-cols-3">
          <div className="md:px-5 my-5 md:my-0">
            <div className="bg-blue-900 p-4 flex items-center text-5xl rounded text-white">
              <FontAwesomeIcon icon={faBook}/>
              <div className='text-center md:ms-10 md:ms-0'>
                <h3 className='text-xl '>Total Number of Books</h3>
                <h3 className='text-4xl '>100+</h3>
              </div>
            </div>
          </div>
          <div className="md:px-5 my-5 md:my-0">
            <div className="bg-green-900 p-4 flex items-center text-5xl rounded text-white">
              <FontAwesomeIcon icon={faUser}/>
              <div className='text-center md:ms-10 md:ms-0'>
                <h3 className='text-xl '>Total Number of Users</h3>
                <h3 className='text-4xl '>100+</h3>
              </div>
            </div>
          </div>
          <div className="md:px-5 my-5 md:my-0">
            <div className="bg-yellow-600 p-4 flex items-center text-5xl rounded text-white">
              <FontAwesomeIcon icon={faUser}/>
              <div className='text-center md:ms-10 md:ms-0'>
                <h3 className='text-xl '>Total Number of Employees</h3>
                <h3 className='text-4xl '>100+</h3>
              </div>
            </div>
          </div>
         </div>
         <div className='md:grid grid-cols-2 p-5 my-5'>
              <div>Bar Chart</div>
              <div>Pie Chat</div>
         </div>

          
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default DashboardAdmin