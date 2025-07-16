import { useState} from "react";
import type { PostData } from "../pages/PostList";

interface DeleteProps{
    postData: PostData;
}
const DeleteButton: React.FC<DeleteProps> = ({postData}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleDeleteUser = async(e:React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/posts/${postData.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to submit post');
            }

            closeModal();
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <>
       <button
        onClick={openModal}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Delete
      </button>

      {isModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-xl p-8">
             <h3 className="text-lg font-medium text-gray-900 mb-4">
            Are you sure you want to delete this item?
            </h3>
            <p className="text-gray-600 mb-6">
            This action cannot be undone. The item will be permanently removed.
            </p>
            <div className="flex justify-end space-x-3">
            <button
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
                Cancel
            </button>
            <button
                onClick={handleDeleteUser}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
                Delete
            </button>
            </div>
          </div>
        </div>
        )}
    </>
  )
}

export default DeleteButton
