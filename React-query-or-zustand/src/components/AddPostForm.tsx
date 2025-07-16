import { useId, useState } from "react";
import type { PostData } from "../pages/PostList"

interface FormProps {
    closeModal: () => void;
    isEdit: boolean;
    initialData ?: PostData;
    onSubmit?: (data: PostData) => Promise<void>;
}


const AddPostForm: React.FC<FormProps> = ({closeModal, isEdit = false, initialData}) => {
    const generateRandomId = () => Math.floor(Math.random() * 1000000);
    const [data, setData] = useState<PostData>( initialData || {
        id: generateRandomId().toString(),  
        name: '',
        email: '',
        body:'',
        status: ''
    })

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setData(prev => ({
            ...prev,
            [name] : value,
        }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const method = isEdit ? 'PATCH' : 'POST';
            const url = isEdit
                ? `http://localhost:3000/posts/${data.id}`
                : 'http://localhost:3000/posts';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    status: "active"
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit post');
            }

            if (!isEdit) {
                setData({
                    id: generateRandomId().toString(),
                    name: '',
                    email: '',
                    body: '',
                    status: ''
                });
            }
            closeModal();
        } catch (err) {
            console.log(err);
        } finally {
            setIsSubmitting(false);
        }
    }

  return (
   <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <div className="flex justify-between w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6"> {isEdit? "Edit Post" : "Create New Post"}</h2>
        <span onClick={closeModal}>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L4 4.00003M20 4L4.00002 20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </span>
    </div>
    <form onSubmit={handleSubmit}>
        <div className="space-y-4">
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={data.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            </div>

            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
            </label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={data.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            </div>

            <div>
            <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
                Post Content
            </label>
            <textarea
                id="body"
                name="body"
                rows={4}
                placeholder="Write your post content here..."
                value={data.body}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            </div>

            <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md"
            >
            {isSubmitting 
                ? 'Submitting...' 
                : isEdit ? 'Update Post' : 'Publish Post'}
            </button>
        </div>
    </form>
    </div>
  )
}

export default AddPostForm
