import React, { useEffect, useState } from 'react'

interface ClockProps {
    militaryTime?: boolean; //24-hr format
    showSeconds?: boolean;
}

const DigitalClock: React.FC<ClockProps> = ({
    militaryTime = false,
    showSeconds = true
}) => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(()=> {
        const timerId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return() => clearInterval(timerId);
    }, []);

    //formatting the time
    const formatTime = (): string => {
        const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: !militaryTime,
        };

        if (showSeconds){
            options.second = '2-digit'
        }

        return time.toLocaleTimeString(undefined, options);
    }
  return (
    <>
        <div className='flex flex-col justify-center items-center h-[100vh]'> 
            <span className='font-bold text-4xl text-gray-900 mb-5'> My Clock </span>
            <div className=" bg-gray-900 text-green-400 font-mono p-6 rounded-lg shadow-lg border-2 border-green-500 inline-block text-center">
                <div className="text-sm mb-1">
                    {time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <div className="text-4xl font-bold">
                    {formatTime()}
                </div>
            </div>
        </div>
    </>
  )
}

export default DigitalClock
