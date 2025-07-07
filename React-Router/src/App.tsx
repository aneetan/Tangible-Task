import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { Route, Routes } from 'react-router';
import Register from './pages/Register';
import PostDetails from './pages/PostDetails';
import AdminDashboard from './pages/AdminDashboard';
import { ProtectedRoute } from './components/ProtectedRoutes';

function App() {
  return (
     <>
     <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/post/:id' element={<PostDetails/>}/>

        <Route element={<ProtectedRoute allowedRoles={['Admin']} />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Route>
                    
        <Route element={<ProtectedRoute allowedRoles={['User']} />}>
            <Route path="/home" element={<Home />} />
        </Route>

        <Route path='/*' element={<div> 404 </div>}/>
        <Route path='/unauthorized' element={<div> Unauthorized</div>}/>
        
     </Routes>
     </>
  )
}

export default App
