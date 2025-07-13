import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Counter from './components/Counter'
import HomeSection from './pages/HomeSection'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeSection/>} />
        <Route path='/counter' element={<Counter/>} />
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
