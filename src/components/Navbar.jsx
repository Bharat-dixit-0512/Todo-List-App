import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-indigo-900 text-white py-2 px-8'>
      <div className="logo">
        <span className='font-bold text-xl'>iTask</span>
      </div>
      <div className="links flex gap-6">
        <a
          href="/"
          className="px-4 py-1 hover:bg-indigo-800 rounded transition-colors"
        >
          Home
        </a>
        <a
          href="https://www.linkedin.com/in/bharat-dixit-b14348363/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 hover:bg-indigo-800 rounded transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  )
}

export default Navbar