
const HomeSection = () => {
  return (
    <div className='flex justify-center align-center items-center h-[100vh]'>
        <div className='grid m-4'>
        <a href='/counter' className='my-4 text-base text-blue-500 font-semibold underline'> useCounter </a>
        <a href='/toggle' className='my-4 text-base text-blue-500 font-semibold underline'> useToggle  </a>
        <a href='/form' className='my-4 text-base text-blue-500 font-semibold underline'> useReducer </a>
        <a href='/refresh-ui' className='my-4 text-base text-blue-500 font-semibold underline'> useTimer </a>
        </div>
    </div>
  )
}

export default HomeSection
