import React from 'react'
import useToggle from '../hooks/useToggle'

const Toggle = () => {
    const {isOpen, setOpen, setClose, toggle} = useToggle();
  return (
    <>
    {/* ------------------ Model Container ----------------------------- */}
    <div className="relative">
        <div className='h-[100vh] flex items-center justify-center '>
            <button 
                onClick={setOpen}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                Open Modal
            </button>
        </div>

        {isOpen && (
            <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50" onClick={setClose}>
                <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative animate-fade-in">
                    <button
                    onClick={setClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                    
                    <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900">Hello, I'm a modal!</h3>
                    <p className="mt-2 text-gray-600">
                        This is a styled modal dialog with proper animations and layout.
                    </p>
                    </div>
                </div>
            </div>
        )}
    </div>

    {/* ---------------------- Dropdown ---------------------------------- */}
    <button onClick={toggle}> User Profile </button>
    {isOpen && (
        <div>
        <a> View Profile </a>
        <a> Logout </a>
        </div>
    )}
        
    </>
  )
}

export default Toggle
