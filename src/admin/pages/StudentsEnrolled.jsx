import React from 'react'
import Header from '../../users/components/Header'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'

function StudentsEnrolled() {
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
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">Student Name</th>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">Course Title</th>
      <th class="border border-gray-500 px-4 py-2 bg-gray-100">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-500 px-4 py-2">1</td>
      <td class="border border-gray-500 px-4 py-2">Aarav Sharma</td>
      <td class="border border-gray-500 px-4 py-2">Web Development</td>
      <td class="border border-gray-500 px-4 py-2">2025-10-06</td>
    </tr>
    <tr>
      <td class="border border-gray-500 px-4 py-2">2</td>
      <td class="border border-gray-500 px-4 py-2">Ananya Nair</td>
      <td class="border border-gray-500 px-4 py-2">Data Science</td>
      <td class="border border-gray-500 px-4 py-2">2025-10-05</td>
    </tr>
    <tr>
      <td class="border border-gray-500 px-4 py-2">3</td>
      <td class="border border-gray-500 px-4 py-2">Rahul Menon</td>
      <td class="border border-gray-500 px-4 py-2">Cloud Computing</td>
      <td class="border border-gray-500 px-4 py-2">2025-10-04</td>
    </tr>
  </tbody>
</table>


            </div>
        </div>
        <Footer/>
        </div>
  )
}

export default StudentsEnrolled