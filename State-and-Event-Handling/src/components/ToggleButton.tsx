import React, { useState } from 'react'

const ToggleButton = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleButtonClick = ():void => {
        setIsClicked(!isClicked);
    }

  return (
    <>
        <span className='mx-24'> Toggle Button is {isClicked? "ON" : "OFF"} </span>
        <button
            onClick={handleButtonClick}
            className="px-6 py-2 rounded-md transition-colors duration-300 bg-blue-300 my-4">
                {isClicked? "ON" : "OFF"}
        </button>
      
    </>
  )
}

export default ToggleButton
