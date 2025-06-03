import { FaEnvelope } from "react-icons/fa"

interface Props{
    name: string,
    age: number,
    bio: string,
    email: string
}

const Card = (props : Props) => {
  return (
    <>
     <div className="w-full max-w-md p-4 border-2 rounded-lg border-gray-300 shadow-sm hover:shadow-md
     transition-shadow mx-4 my-2 mb-6 md:mb-24 bg-white">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Name: {props.name}</h2>
        <p className="text-gray-600"><span className="font-medium">Age:</span> {props.age}</p>
        <p className="text-gray-700"><span className="font-medium">Bio:</span> {props.bio}</p>

        <div className="flex items-center text-gray-600">
          <FaEnvelope className="text-sm mr-2" />
          <span className="text-sm hover:text-blue-500 transition-colors">
            {props.email}
          </span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card
