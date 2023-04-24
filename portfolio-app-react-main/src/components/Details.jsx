import React from 'react'

const Contact = () => {
  return (
    <div name='details' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <table class="styled-table">
    <thead>
        <tr>
            <th className='text-4xl font-bold inline border-b-2 text-gray-300 border-yellow-600'>Personal Details</th>
        </tr>
    </thead>
    <tbody className='sm:text-left text-1xl font-bold  text-gray-300' >
        <tr>
            <td>Full Name:</td>
            <td>Vitaly Rapoport</td>
        </tr>
        <tr>
            <td>Phone Number:</td>
            <td>0544775367</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>vitalyrapoport3@gmail.com</td>
        </tr>
        <tr>
            <td>City:</td>
            <td>Holon</td>
        </tr>
        <tr>
            <td>Date of Birth</td>
            <td>22/12/1998</td>
        </tr>
        <tr>
            <td>Languages:</td>
            <td>Hebrew, English, Russian</td>
        </tr>
    </tbody>
</table>
    </div>
  )
}

export default Contact