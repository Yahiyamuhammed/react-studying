
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/pages/home.jsx'
import Datas from './components/pages/datas.jsx'
import router from './lib/router.jsx'

// const router =createBrowserRouter([
//   {
//     path:'',
//     element:< Home/>
//   },
//   {
//     path:'/data',
//     element:< Datas/>
//   }
// ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
