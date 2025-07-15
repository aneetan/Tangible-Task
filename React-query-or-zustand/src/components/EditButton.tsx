import { useState } from "react";
import type { PostData } from "../pages/PostList"
import AddPostForm from "./AddPostForm";

interface EditProps{
    postData: PostData;
}
const EditButton: React.FC<EditProps> = ({postData}) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditClick = () => {
        setIsEditModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsEditModalOpen(false)
    }

  return (
    <>
       <button
        onClick={handleEditClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Edit
      </button>

      {isEditModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-xl">
             <AddPostForm
            initialData={postData} 
            closeModal={handleCloseModal}
            isEdit={true}
          />
          </div>
        </div>
        )}
    </>
  )
}

export default EditButton
