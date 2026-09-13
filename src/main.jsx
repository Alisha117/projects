import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./components/about/About.jsx";
import Campus from "./components/campus/Campus.jsx";
import Contact from "./components/contact/Contact.jsx";
import Hero from "./components/hero/Hero.jsx";
import Programs from "./components/programs/Programs.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
 const router = createBrowserRouter([
         {
		path: '/',
		element: <App/>,
		children: [
          {  
          path:'/',
          element:<Hero/>
          },
          {
          path:'/programs',
          element:<Programs/>
          },
          {
          path:'/about' ,
          element:<About/>
          },
          {
          path:'/campus' ,
          element:<Campus/>
          },
          {
          path:'/testimonials' ,
          element:<Testimonials/>
          },
          {
          path:'/contact' , 
          element:<Contact/>
          }]
          }
          ])
createRoot(document.getElementById('root')).render(
  <>
   <RouterProvider router={router}/>
  </>
    
  
)
