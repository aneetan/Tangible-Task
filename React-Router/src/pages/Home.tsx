import { useAuth } from '../hooks/useAuth';
import PostComponent from '../components/PostComponent';



const Home = () => {
    const {user, role, logout} = useAuth();
    
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome, {user}</h1>
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
                </div>
                <div className="mt-4 sm:mt-0">
                <button
                    onClick={logout}
                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                >
                    Logout
                </button>
                </div>
            </div>
        </div>

        {/* Blog Posts Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</h2>
          <PostComponent/>
        </div>
      </div>
    </div>
  )
}

export default Home
