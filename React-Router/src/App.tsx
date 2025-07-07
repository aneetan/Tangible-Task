import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { useAuth } from './hooks/useAuth'
import { Route, Routes } from 'react-router';
import Register from './pages/Register';

function App() {
  const {isAuthenticated} = useAuth();

  return (
     <>
     <Routes>
        <Route path='/' element={isAuthenticated()? <Home/> : <Login/>}/>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
     </Routes>
     </>
  )
}

export default App
