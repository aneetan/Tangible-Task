import './App.css'
import BookGenre from './components/BookGenre'
import BookList from './components/BookList'
import WelcomeMessage from './components/WelcomeMessage'

function App() {

  return (
    <>
      <div className='flex justify-between'>
        <div className='w-1/2'>
          <WelcomeMessage/>

          <BookList/>
        </div>

        <div className='w-1/2'>
          <BookGenre/>
        </div>
      </div>
      

    </>
  )
}

export default App
