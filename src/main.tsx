import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/system'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Projects from './Projects/Projects.tsx'
import ContactUs from './ContactUs/ContactUs.tsx'
import AboutUs from './AboutUs/AboutUs.tsx'
import Home from './Home/Home.tsx'
import Project from './Projects/Project.tsx'

const router = createBrowserRouter(
  [
    {
      'path': '/', element: <App />, children: [
        { 'path': '/Projects', element: <Projects /> },
        { 'path': '/ContactUs', element: <ContactUs /> },
        { 'path': '/AboutUs', element: <AboutUs /> },
        { 'path': '/Home', element: <Home /> },
        { 'path': '/Projects/:category/:id', element: <Project /> }
      ]
    }
  ],
  { basename: '/' }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className='w-screen dark text-foreground bg-background '>
        <RouterProvider router={router} />
      </div>
    </ NextUIProvider>
  </React.StrictMode>,
)
