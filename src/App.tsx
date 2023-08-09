import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import Nav from './Navbar/Navbar'
import { useEffect } from 'react'

function App() {
  return (
    <>
      <Nav />
      <br />
      <div className=' flex justify-center pt-10'>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
