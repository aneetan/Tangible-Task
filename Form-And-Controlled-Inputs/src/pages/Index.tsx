import React from 'react'

const Index = () => {
  return (
   <div className='flex justify-center align-center items-center h-[100vh]'>
        <div className='grid m-4'>
        <a href='/login' className='my-4 text-base text-blue-500 font-semibold underline'> Level  Awareness </a>
        <a href='/empty-error' className='my-4 text-base text-blue-500 font-semibold underline'> Level  Application </a>
        <a href='/contact-form' className='my-4 text-base text-blue-500 font-semibold underline'> Level  Mastery </a>
        <a href='/custom-hook' className='my-4 text-base text-blue-500 font-semibold underline'> Level  Influence </a>
        </div>
    </div>
  )
}

export default Index
