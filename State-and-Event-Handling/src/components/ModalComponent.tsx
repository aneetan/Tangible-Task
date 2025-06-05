import React, { useState } from 'react'
import FormComponent from './FormComponent';

const ModalComponent = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleButtonClick = () => {
        setOpenModal(true)
    }
  return (
    <>
        <button
            onClick={handleButtonClick}
            className="px-6 py-2 rounded-md transition-colors duration-300 bg-blue-300 my-4">
                Open Modal
        </button>

        {openModal && (
          <div className="fixed inset-0 z-50 bg-blue-200/60  overflow-y-auto">

              {/*----------------------------Modal Container------------------------------- */}
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      <div className="pt-4 pr-4 float-right">
                          <button
                              onClick={() => setOpenModal(false)}
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                          >
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                          </button>
                      </div>
                      {/*------------------------Form----------------------------------- */}
                       <FormComponent/>
                  </div>
              </div>
          </div>
            )}
    </>
  )
}

export default ModalComponent
