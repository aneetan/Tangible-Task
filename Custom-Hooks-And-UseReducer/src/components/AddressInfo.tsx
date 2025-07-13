import type { Action } from "../hooks/reducer";

interface Form{
    address: string;
    city: string;
}

interface AddressInfoProps{
    formData: Form;
    dispatch: React.Dispatch<Action>;
}


const AddressInfo:React.FC<AddressInfoProps> = ({formData, dispatch}) => {
  return (
    <>
      <div className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <input
          id="address"
          type="text"
          placeholder="Enter your street address"
          value={formData.address}
          onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "address", value: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          City
        </label>
        <input
          id="city"
          type="text"
          placeholder="Enter your city"
          value={formData.city}
          onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "city", value: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
        />
      </div>
    </div>
    </>
  )
}

export default AddressInfo
