import { useEffect, useState } from 'react';
import useFakeQuery from '../hooks/useFakeQuery';
import { BeatLoader } from 'react-spinners';
import AddPostForm from '../components/AddPostForm';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';
import { useFilteredItems, useListActions, usePostCounts } from '../hooks/zustandHooks';
import { useListStore } from '../store/createListStore';

 export type PostData = {
    id: string;
    name: string;
    email: string;
    body: string;
    status: string;
}


const PostList = () => {
  const { data, isLoading, error, refetch } = useFakeQuery<PostData>('http://localhost:3000/posts');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {filter, setItems, getFilteredItems, getCounts, setFilter} = useListStore();

  useEffect(()=> {
    setItems(data);
  }, [data])

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const filteredItems = getFilteredItems();
  const counts = getCounts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Latest Posts</h2>

        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-gray-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({counts.total})
          </button>
          
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === 'active'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Active ({counts.active})
          </button>
          
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === 'completed'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Completed ({counts.completed})
          </button>
        </div>

        <div className='flex justify-between items-center'>
            <button
            onClick={refetch}
            disabled={isLoading}
            className="px-4 py-2 rounded-md font-medium transition-colors cursor-pointer"
            >
            <svg width="30px" height="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M25 38c-7.2 0-13-5.8-13-13 0-3.2 1.2-6.2 3.3-8.6l1.5 1.3C15 19.7 14 22.3 14 25c0 6.1 4.9 11 11 11 1.6 0 3.1-.3 4.6-1l.8 1.8c-1.7.8-3.5 1.2-5.4 1.2z"/><path d="M34.7 33.7l-1.5-1.3c1.8-2 2.8-4.6 2.8-7.3 0-6.1-4.9-11-11-11-1.6 0-3.1.3-4.6 1l-.8-1.8c1.7-.8 3.5-1.2 5.4-1.2 7.2 0 13 5.8 13 13 0 3.1-1.2 6.2-3.3 8.6z"/><path d="M18 24h-2v-6h-6v-2h8z"/><path d="M40 34h-8v-8h2v6h6z"/></svg>
            </button>

            <button
            disabled={isLoading}
            onClick={openModal}
            className={` flex px-4 py-2 rounded-md font-medium transition-colors ${
                isLoading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
            >
                + Add Posts
            </button>
        </div>
      </div>

      {/* Loading state */}
      {isLoading && !error && (
        <div className="flex justify-center items-center h-64">
          <BeatLoader color="#16a34a" size={15} />
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {post.name}
                </h3>
                 <div className="flex items-center text-sm text-gray-500">
                  <span>Email: {post.email}</span>
                </div>
                <div className={`inline-flex my-2 capitalize text-xs font-medium px-2.5 py-0.5 rounded-full ${
                  post.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : post.status === 'active' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-800'
                }`}>
                  {post.status}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
                 <div className='flex flex-start gap-3'>
                  <EditButton postData={post}/>
                  <DeleteButton postData={post}/>
                </div>
              </div>
              
            </article>
          ))}
        </div>
      )}

      {!isLoading && !error && data.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No posts available</p>
          <button
            onClick={refetch}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Load Posts
          </button>
        </div>
      )}



      {isOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-xl">
            <AddPostForm closeModal={closeModal} isEdit={false}/>
          </div>
        </div>
      )}

    </div>
  );
};

export default PostList;