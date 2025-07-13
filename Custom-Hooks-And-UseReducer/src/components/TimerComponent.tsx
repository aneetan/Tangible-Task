import useTimer from "../hooks/useTimer";

const TimerComponent= () => {
  const { time, isPlaying, start, pause, reset } = useTimer();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Timer: <span className="text-indigo-600">{time}s</span>
        </h2>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={start}
            disabled={isPlaying}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              isPlaying 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg'
            }`}
          >
            Start
          </button>
          
          <button
            onClick={pause}
            disabled={!isPlaying}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              !isPlaying 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-amber-500 hover:bg-amber-600 text-white shadow-md hover:shadow-lg'
            }`}
          >
            Pause
          </button>
          
          <button
            onClick={reset}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
          >
            Reset
          </button>
        </div>

        <div className="mt-6 text-center">
          <div className={`h-2 rounded-full bg-gray-200 overflow-hidden ${
            isPlaying ? 'animate-pulse' : ''
          }`}>
            <div 
              className="h-full bg-indigo-500 transition-all duration-1000" 
              style={{ width: `${(time % 60) * 1.666}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {isPlaying ? 'Timer is running...' : 'Timer paused'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimerComponent;