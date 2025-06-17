import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import ComponentMounts from './components/ComponentMounts'
import Index from './pages/Index'
import LoadingComponent from './components/LoadingComponent'
import DigitalClock from './components/DigitalClock'
import AutoRefreshUI from './components/AutoRefreshUI'

function App() {

  return (
    <>
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/mounted' element={<ComponentMounts/>} />
          <Route path='/loading' element={<LoadingComponent/>} />
          <Route path='/clock' element={<DigitalClock/>} />
          <Route path='/refresh-ui' element={<AutoRefreshUI/>} />

         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
