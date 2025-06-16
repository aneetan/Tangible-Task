import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import ComponentMounts from './components/ComponentMounts'
import Index from './pages/Index'
import LoadingComponent from './components/LoadingComponent'

function App() {

  return (
    <>
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/mounted' element={<ComponentMounts/>} />
          <Route path='/loading' element={<LoadingComponent/>} />

         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
