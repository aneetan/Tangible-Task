import { useAuth } from '../hooks/useAuth';

const Home = () => {
    const {user, logout} = useAuth();
  return (
    <div>
      <h1> Hello {user}</h1>

      <button className='border px-8 py-2 bg-gray-800 text-white' onClick={logout}> Logout </button>
    </div>
  )
}

export default Home
