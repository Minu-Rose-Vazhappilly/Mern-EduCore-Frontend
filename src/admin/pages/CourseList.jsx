import React from 'react'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import Header from '../../users/components/Header'

function CourseList() {
  return (
    <div>
        <Header/>
        <div className="md:grid grid-cols-3">
            <div className='col-span-1'>
                <AdminSideBar/>
            </div>
            <div className='col-span-2 md:p-6 md:my-0 my-3'>
                <table class="table-auto border-collapse border border-gray-500 w-full ">
  <thead>
    <tr>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">#</th>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">All Courses</th>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">Earnings</th>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">Students</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-500 px-4 py-2">1</td>
      <td class="border border-gray-500 px-4 py-2">Flutter</td>
      <td class="border border-gray-500 px-4 py-2">$150</td>
      <td class="border border-gray-500 px-4 py-2">20</td>
    </tr>
    <tr>
      <td class="border border-gray-500 px-4 py-2">2</td>
      <td class="border border-gray-500 px-4 py-2">MERN STACK</td>
      <td class="border border-gray-500 px-4 py-2">$290</td>
      <td class="border border-gray-500 px-4 py-2">30</td>
    </tr>
    <tr>
      <td class="border border-gray-500 px-4 py-2">3</td>
      <td class="border border-gray-500 px-4 py-2">Cloud Computing</td>
      <td class="border border-gray-500 px-4 py-2">$300</td>
      <td class="border border-gray-500 px-4 py-2">20</td>
    </tr>
  </tbody>
</table>


            </div>
        </div>
        <Footer/>
        </div>
  )
}

export default CourseList