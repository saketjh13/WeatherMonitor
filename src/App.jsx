import './App.css'
import Container from './components/Container'

function App() {

  return (
    <>
      <div className='flex justify-center items-center md:bg-gradient-to-r md:from-cyan-500 md:via-sky-700 md:to-blue-500 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 w-screen h-screen'>
        <div className='flex w-5/6 h-5/6 md:h-3/4 md:w-3/4 justify-center items-center '>
          <Container />
        </div>
      </div>
    </>
  )
}

export default App
