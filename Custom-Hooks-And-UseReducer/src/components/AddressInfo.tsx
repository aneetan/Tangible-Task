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
      <input
        placeholder="Address"
        value={formData.address}
        onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "address", value: e.target.value })}
      />
      <input
        placeholder="City"
        value={formData.city}
        onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "city", value: e.target.value })}
      />
    </>
  )
}

export default AddressInfo
