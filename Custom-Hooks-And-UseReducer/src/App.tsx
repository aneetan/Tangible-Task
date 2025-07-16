import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Counter from './components/Counter'
import HomeSection from './pages/HomeSection'
import Toggle from './components/Toggle'
import MultiStepForm from './pages/MultiStepForm'
import TimerComponent from './components/TimerComponent'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeSection/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/toggle' element={<Toggle/>} />
        <Route path='/form' element={<MultiStepForm/>} />
        <Route path='/timer' element={<TimerComponent/>} />
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
