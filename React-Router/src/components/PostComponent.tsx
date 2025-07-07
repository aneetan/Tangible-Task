import { useEffect, useState } from 'react'
import type { PostProps } from '../data/post'
import { useNavigate } from 'react-router';

const PostComponent = () => {
  const [post, setPost] = useState<PostProps[]>([]);
  const navigate = useNavigate();

  const readMore = (id: number) => {
      navigate(`/post/${id}`)
  }

  useEffect(() => {
    import('../data/post')
      .then(modules => {
        setPost(modules.default)
      })
      .catch((err) => {
        console.log("Failed to load post", err)
      })
  }, [])

  return (
    <div className="space-y-6">
      {post.map((post) => (
        <div key={post.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
          <h3 className="text-lg font-medium text-gray-900">
              {post.title}
          </h3>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <span>{post.date}</span>             
          </div>
          <p className="mt-1 text-sm text-gray-600">{post.description.substring(0, 200)} ....
            <button 
              onClick={()=> readMore(post.id)}
              className="ml-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              Read More
            </button>
          </p>
        </div>
      ))}
    </div>
  )
}

export default PostComponent
