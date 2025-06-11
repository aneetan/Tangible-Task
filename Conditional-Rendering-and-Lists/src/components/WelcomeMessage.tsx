import React, { useState } from 'react'

const WelcomeMessage = () => {
    const[isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <>
            <div className='grid grid-cols-1 gap-4 mt-24 p-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
                <button 
                    className='px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    onClick={() => setIsAuthenticated(true)}
                >
                    Click here to Login
                </button>

                <span className={`text-xl font-semibold mt-4 text-center ${isAuthenticated ? 'text-gray-800' : 'text-transparent'}`}>
                    {isAuthenticated ? "Welcome User" : "placeholder"}
                </span>
            </div>

            <div className="space-y-3 pt-4 flex flex-col justify-center items-center">
                <h3 className="text-lg font-medium text-gray-700">Quick Links</h3>
                <a href='/booklist' className="block px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200">
                    View Level Application
                </a>
                <a href='/bookgenre' className="block px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200">
                    View Level Mastery
                </a>
                <a href='/renderList' className="block px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200">
                    View Level Influence
                </a>
            </div>


        </>
    )
}

export default WelcomeMessage
