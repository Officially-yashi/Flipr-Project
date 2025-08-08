import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='flex justify-between m-4 px-12 items-center py-2'>
      <img src='/assets/logo.svg' className='h-8' />
      <div className='flex gap-12 text-center items-center'>
        <Link to="/" className='text-center font-bold text-blue-700'>
          HOME
        </Link>
        <Link to="/projects" className='text-center font-bold hover:text-blue-500'>
          PROJECTS
        </Link>
        <Link to="/testimonials" className='text-center font-bold hover:text-blue-500'>
          TESTIMONIALS
        </Link>
        <Link to="/contact" className="border rounded-md px-6 py-1 bg-orange-500 text-white">
  CONTACT
</Link>
      </div>
    
    </div>
  )
}

export default Navbar
