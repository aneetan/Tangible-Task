import './App.css'
import { Route, Routes } from 'react-router';
import { ProtectedRoute } from './components/ProtectedRoutes';
import { lazy, Suspense } from 'react';

const AdminPanel = lazy(() => import('./pages/AdminDashboard'))
const UserDashboard = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const SeePost = lazy(() => import('./pages/PostDetails'))
const Register = lazy(()=> import('./pages/Register')) 

function App() {
  return (
     <>
     <Suspense fallback={<div> Loading......</div>}>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route element={<ProtectedRoute allowedRoles={['Admin']} />}>
            <Route path="/dashboard" element={<AdminPanel />} />
          </Route>
                      
          <Route element={<ProtectedRoute allowedRoles={['User']} />}>
              <Route path="/home" element={<UserDashboard />} />
              <Route path='/post/:id' element={<SeePost/>}/>
          </Route>

          <Route path='/*' element={<div> 404 </div>}/>
          <Route path='/unauthorized' element={<div> Unauthorized</div>}/>
          
      </Routes>
     </Suspense>
     </>
  )
}

export default App
