import './App.css'
import ModalComponent from './components/ModalComponent'
import SearchBox from './components/SearchBox'
import ToggleButton from './components/ToggleButton'

function App() {

  return (
    <>
      <div className='flex w-full justify-center'>
        <div className='w-1/2 border border-gray-500 h-[100vh] p-4'>
          <ToggleButton/> 
          <SearchBox/>
        </div>
        <div className='w-1/2 border border-gray-500 h-[100vh] p-4'>
          <ModalComponent/>
        </div>
      </div>
    </>
  )
}

export default App
