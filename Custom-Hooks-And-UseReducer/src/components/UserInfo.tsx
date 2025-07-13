import type { Action } from "../hooks/reducer";

interface Form{
    name: string;
    email: string;
}

interface UserInfoProps{
    formData: Form,
    dispatch: React.Dispatch<Action>;
}

const UserInfo:React.FC<UserInfoProps> = ({formData, dispatch}) => {
  return (
    <>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })}
      />
      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })}
      />
      
    </>
  )
}

export default UserInfo
