import { useAuth } from '../context/auth/useAuth';
import { useTheme } from '../context/theme/useTheme';

const Login = () => {

    const {username, password, setUsername, setPassword, login} = useAuth();
    const {theme, toggleTheme} = useTheme();

  return (
    <> 
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-md mx-auto pt-12 px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Login</h1>
            <button 
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
            </button>
          </div>

          <form 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-300"
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Username
              </label>
              <input 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-200"
                type="text" 
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Password
              </label>
              <input 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-200"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              type="submit"
            >
              Sign In
            </button>

            <div className="mt-6 text-center">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                Forgot password?
              </a>
            </div>
          </form>

          <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
