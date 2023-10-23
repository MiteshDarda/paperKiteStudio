import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css'
import Nav from './Navbar/Navbar'

function App() {

  const [show, setshow] = useState(true);
  const [lastScrolly, setLastScrolly] = useState(0);

  const controlnavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY != 0) { // if scroll down hide the navbar
        setshow(false);
      } else { // if scroll up show the navbar
        setshow(true);
      }

      // remember current page location to use in the next move
      setLastScrolly(window.scrollY);
    }
  }


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlnavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlnavbar);
      };
    }
  }, [lastScrolly]);

  return (
    <>
      <Nav show={show} />
      <div className='flex justify-center m-0 p-0'>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App;
