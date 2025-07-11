import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { useAuth } from './context/auth/useAuth';

function App() {
  const {isAuthenticated} = useAuth();

  return (
     <>
     {isAuthenticated()? <Home/> : <Login/>}
     </>
  )
}

export default App
