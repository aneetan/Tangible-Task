import { useAuth } from '../hooks/useAuth';

const Login = () => {

    const {username, password, setUsername, setPassword, login} = useAuth();

  return (
    <div>
        <h1> Login </h1>

        <form className='flex flex-col justify-center m-12 w-1/3'>

        <label> username</label>
        <input className='border ' type='text' placeholder='Enter username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <br/>

        <label> password </label>
        <input className='border'
        type='Password'
        placeholder='enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <br/>

        <button className='border px-8 py-2' type='submit' onClick={login}> Login</button>
        </form>
      
    </div>
  )
}

export default Login
