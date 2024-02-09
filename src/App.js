import React from 'react'
import{RouterProvider,createBrowserRouter, createHashRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Mainlayout from './Layouts/Mainlayout'



export default function App() {
  let routes=createHashRouter([
    {
      path:'/', element:<Mainlayout/>, children: [
        { index:true, element: <Home/> },
        { path:'/home', element: <Home/> },
        { path:'about', element: <About/> },
        { path:'portfolio', element: <Portfolio/> },
        { path:'contact', element: <Contact/> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}
