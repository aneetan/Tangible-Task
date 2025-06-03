import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BlogLayout from './components/BlogLayout'
import Home from './pages/Home'

function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blog' element={<BlogLayout/>} /> 
        </Routes>
       </BrowserRouter>
      
       
    </>
  )
}

export default App
