import React, { useState } from 'react'

const WelcomeMessage = () => {
    const[isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <>
            <div className='grid grid-col-1 m-8'>
                <button className='px-6 py-2 border rounded-lg border-gray-700 w-[15%]'
                    onClick={() => setIsAuthenticated(true)}
                >
                    Click here to Login
                </button>

                <span className='text-lg font-bold mt-4'>
                    {isAuthenticated? "Welcome User" : ""}
                </span>
           </div>
        </>
    )
}

export default WelcomeMessage
