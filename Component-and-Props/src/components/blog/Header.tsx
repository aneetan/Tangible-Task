import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const[isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <nav className={`sticky top-0 z-50 bg-gray-100`}>
      <div className={`flex justify-between w-full items-center sticky p-6 md:px-24 z-100`}>
        <span className="font-bold text-2xl md:ml-12 ml-6"> 
            <span className="text-[var(--primary-color)]">Blog</span>
        </span>

        {/* -------------------- Menu for mobile view -------------------- */}
        <div className="md:hidden md:mr-12 mr-6">
          <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none hover:text-[#F86C23]">
             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* -------------- Navlinks --------------- */}
        <div className="hidden md:flex justify-end items-center">
            <ul className="flex space-x-8 text-base justify-end">
                <li>
                    <NavLink 
                        to='/home' 
                        end
                        className="cursor-pointer text-lg font-semibold hover:text-blue-500"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/services' 
                        end
                        className="cursor-pointer text-lg font-semibold hover:text-blue-500"
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                     <NavLink 
                        to='/blog' 
                        end
                        className="cursor-pointer text-lg text-blue-500 font-bold"
                    >
                        Blog
                    </NavLink>
                </li>
            </ul>
        </div> 

        {/* -------------- Login Button --------------- */} 
        <div className="hidden md:flex items-center mr-12">
            <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none
            focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 transition-colors duration-200">
            Login
            </button>
        </div> 
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 pb-4 px-6 shadow-md">
          <ul className="flex flex-col space-y-4 text-base mx-8">
            <NavLink to='/home' end> Home </NavLink>
            <NavLink to='/services' end> Services </NavLink>
            <NavLink to='/blog' end> Blog </NavLink>

            <li>
              <button className=''> Login </button>
            </li>
          </ul>
        </div>
      )} 
      </nav>
    </>
  )
}

export default Header
