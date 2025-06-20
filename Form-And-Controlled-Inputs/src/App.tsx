import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Index from './pages/Index'
import LoginForm from './components/LoginForm'
import EmptyErrorMessage from './components/EmptyErrorMessage'
import ContactForm from './components/ContactForm'

function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/login" element={<LoginForm/>}/> 
          <Route path="/empty-error" element={<EmptyErrorMessage/>}/> 
          <Route path="/contact-form" element={<ContactForm/>}/> 
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
