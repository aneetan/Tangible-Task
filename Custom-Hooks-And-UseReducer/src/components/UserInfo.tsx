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
     <div className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
        />
      </div>
    </div>
      
    </>
  )
}

export default UserInfo
