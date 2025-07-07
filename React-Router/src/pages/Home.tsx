import { Link } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
    const {user, role, logout} = useAuth();
    const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React in this comprehensive tutorial...",
      date: "March 10, 2023",
    },
    {
      id: 2,
      title: "Advanced Tailwind CSS Techniques",
      excerpt: "Discover powerful Tailwind patterns you might not know about...",
      date: "February 28, 2023",
    },
    {
      id: 3,
      title: "State Management in 2023",
      excerpt: "Comparing different state management solutions for modern apps...",
      date: "February 15, 2023",
    },
  ]
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900"> Welcome, {user}</h1>
              <div className="flex items-center justify-center sm:justify-start mt-1">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  role === 'admin' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {role}
                </span>
              </div>
            </div>
            <div>
                <button> Logout </button>
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link to={`/posts/${post.id}`} className="hover:text-indigo-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-600">{post.excerpt}</p>
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
        </div>

        {/* Back to Dashboard Link */}
        <div className="mt-6 text-center">
          <Link
            to="/dashboard" 
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
