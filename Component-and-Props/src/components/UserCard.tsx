import { FaFacebook } from "react-icons/fa"

interface User{
    image: string,  
    name: string,
    bio: string,
    role: string,
    email: string,
    facebookLink: string
}

const UserCard = (props: User) => {
  return (
    <>  
    <div className="flex justify-center items-center">
        <div className="border w-1/2 md:w-1/3 border-gray-400 rounded-lg overflow-hidden shadow-sm hover:shadow:md
        transition-shadow bg-white my-12 mx-12">
            <div className="mt-2 p-4 relative flex flex-col justify-center items-center">
                <div className="absoulte">
                    <img
                    src={props.image}
                    alt="profileImage"
                    className="w-20 h-20 rounded-full border-4 border-white object-cover"
                    />
                </div>

                <div className="mt-4 text-center">
                    <h2 className="text-xl font-bold text-gray-800"> {props.name} </h2>
                    <p className="text-sm text-gray-600">{props.role}</p>
                </div>

                <p className="mt-3 text-sm text-gray-500 text-center line-clamp-3">
                    {props.bio}
                </p>

                {/* Condiitonal rendering pattern */}
                {/* (Only render if facebookLink exist) */}
                {props.facebookLink && (
                    <div className="flex justify-center mt-4 space-x-3">
                        <a href={props.facebookLink} className="text-gray-500 hover:text-purple-600 transition-colors">
                            <FaFacebook/>
                        </a>
                    </div>
                )}

            </div>
        </div>
      </div>
    </>
  )
}

export default UserCard
