import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Counter from './components/Counter'
import HomeSection from './pages/HomeSection'
import Toggle from './components/Toggle'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeSection/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/toggle' element={<Toggle/>} />

      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
