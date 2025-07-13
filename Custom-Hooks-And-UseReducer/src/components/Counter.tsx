import useCounter from '../hooks/useCounter'

const Counter = () => {
    const counter = useCounter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <span className="text-4xl font-bold block mb-6 text-gray-800">
            {counter.count}
            </span>
            
            <div className="flex gap-3 justify-center">
            <button
                onClick={counter.increment}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Increment by 1
            </button>
            
            <button
                onClick={counter.decrement}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
                Decrement by 1
            </button>
            
            <button
                onClick={counter.reset}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
                Reset
            </button>
            </div>
        </div>
    </div>
  )
}

export default Counter
