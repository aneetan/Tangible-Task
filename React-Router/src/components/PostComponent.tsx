import React, { useEffect, useState } from 'react'
import type { PostProps } from '../data/post'
import { Link } from 'react-router';

const PostComponent = () => {
  const [post, setPost] = useState<PostProps[]>([]);

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
            <Link to={`/posts/${post.id}`} className="hover:text-indigo-600">
              {post.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-600">{post.description}</p>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <Link to={`/posts/${post.id}`} className="text-indigo-600 hover:text-indigo-500">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostComponent
