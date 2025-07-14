import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import PostList from './pages/PostList'

function App() {

  return (
    <>
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<PostList/>} />
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
