import React, { useState } from 'react'

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
          <div className="fixed inset-0 z-50 bg-blue-200/60 overflow-y-auto">

              {/*----------------------------Modal Container------------------------------- */}
              <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                      {/*------------------------Form----------------------------------- */}
                      <form className="px-6 py-4">
                          <div className="space-y-6">
                            {/* --------------------- Close button ----------------------- */}
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
                              <div>
                                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Add New Product</h3>
                                  
                                  <div className="mb-4">
                                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                          Product Name
                                      </label>
                                      <input
                                          name="name"
                                          type="text"
                                          required
                                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                      />
                                  </div>

                                  <div className="mb-4">
                                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                          Description
                                      </label>
                                      <textarea
                                          name="description"
                                          rows={4}
                                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                      />
                                  </div>
                              </div>
                          </div>

                          {/* Form Actions */}
                          <div className="mt-6 flex justify-end space-x-3">
                              <button
                                  type="button"
                                  onClick={() => setOpenModal(false)}
                                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                  Cancel
                              </button>
                              <button
                                  type="submit"
                                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                  Submit
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
            )}
    </>
  )
}

export default ModalComponent
