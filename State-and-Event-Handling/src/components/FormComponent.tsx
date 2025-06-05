import useInput from '../hooks/useInput'

const FormComponent = () => {
    const productName = useInput('');
    const description = useInput('');
    return (
        <>
        <form className="px-6 py-4">
            <div className="space-y-6">
            {/* --------------------- Close button ----------------------- */}
            <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Add New Product</h3>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Product Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        value={productName.value}
                        onChange={productName.onChange}
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
                        value={description.value}
                        onChange={description.onChange}
                        rows={4}
                        className="appearance-none resize-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
            </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
                <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </div>
        </form>
        
        </>
    )
}

export default FormComponent
