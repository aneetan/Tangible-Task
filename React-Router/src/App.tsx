import { useContext, useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/useAuth'

function App() {
  const {isAuthenticated} = useAuth();

  return (
     <>
     {isAuthenticated()? <Home/> : <Login/>}
     </>
  )
}

export default App
