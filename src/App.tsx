import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Navbar/Navbar'

function App() {
  return (
    <>
      <Nav />
      <br />
      <div className=' flex justify-center'>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
