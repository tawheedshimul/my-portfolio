
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full bg-gray-800 text-gray-100 body-font mb-4 shadow-sm">

            {/* :DESKTOP MENU */}
            <div className="container mx-auto flex justify-between items-center py-7 px-5">
                {/* Site logo and Name */}
                <a href="#link" className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">Tawheed</span>
                </a>
                {/* Navbar */}
                <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
                    <Link to='/' className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Home</Link>
                    <p className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Download Resume</p>
                    <Link to='/contact' className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Contact Us</Link>
                </nav>
                
                {/* Burger icon standard */}
                <button
                    className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* :MOBILE MENU */}
            {isOpen &&
                <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold">
                    <Link to='/' className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Home</Link>
                    <p className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Download Resume</p>
                    <Link to='/contact' className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Contact Us</Link>
                </div>
            }

        </header>
    )
}

export default Navbar
