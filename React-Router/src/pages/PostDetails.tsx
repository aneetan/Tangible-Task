import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import type { PostProps } from "../data/post";

const PostDetails = () => {
    const {id} = useParams<{id: string}>();
    const [post, setPost] = useState<PostProps | null>(null);

    useEffect(() => {
    import('../data/post')
      .then(module => {
        const foundPost = module.default.find(p => p.id === Number(id));
        setPost(foundPost || null);
      })
      .catch(err => {
        console.error("Failed to load post:", err);
      });
  }, [id]);

    if (!post) return <div className="text-center py-8">Post not found</div>;
  return (
    <>
       <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Link
            to="/home" 
            className="text-indigo-600 hover:text-indigo-800 font-medium mb-4 inline-block"
        >
            ← Back to all posts
        </Link>
        <article className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900">{post.title}</h1>
            <time className="block mt-2 text-sm text-gray-500">{post.date}</time>
            <div className="mt-6 prose prose-indigo max-w-none">
            <p className="text-gray-700">{post.description}</p>
            </div>
        </article>
        </div>
    </>
  )
}

export default PostDetails
