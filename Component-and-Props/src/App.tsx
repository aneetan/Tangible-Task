import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import CardComponent from './components/CardComponent'
import UserCard from './components/UserCard'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/blog/Header'
import BlogLayout from './components/BlogLayout'

function App() {

  return (
    <>
       {/* ----------------------------------------- Awareness --------------------------------------------- */}
       {/* <WelcomeMessage/> */}
       {/* <hr/> */}

       {/* ----------------------------------------- Application --------------------------------------------- */}

        {/* <UserCard
        image='https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        name='John Doe'
        bio='Experienced developer primarily focused on frontend development using React, Next and Vue'
        role='Software engineer'
        email='john@gmail.com'
        facebookLink='www.facebook.com'
        /> */}

       {/* ---------------------------------------- Mastery ---------------------------------------- */}
       
       {/* <CardComponent/> */}

       <BrowserRouter>
        <Routes>
          <Route path='/blog' element={<BlogLayout/>} /> 
        </Routes>
       </BrowserRouter>
      
       
    </>
  )
}

export default App
