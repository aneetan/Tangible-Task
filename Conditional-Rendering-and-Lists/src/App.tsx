import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import BookGenre from './components/BookGenre'
import BookList from './components/BookList'
import WelcomeMessage from './components/WelcomeMessage'
import ListRendererImplements from './components/ListRendererImplements'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeMessage/>} />
          <Route path='/booklist' element={<BookList/>} />
          <Route path='/bookgenre' element={<BookGenre/>} />
          <Route path='/renderList' element={<ListRendererImplements/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
