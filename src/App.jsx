import {createBrowserRouter,RouterProvider} from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import { useState } from "react";


function App() {
    
  
          const [ playState , setPlayState ] = useState(false);
          const router = createBrowserRouter([
         {
		path: '/',
		element: <Layout/>,
		children: [
 {  
          path:'/',
          element:<Hero/>
          },
          {
          path:'/program',
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

  return (
   <div>
       <RouterProvider router={router}/>
           <Navbar/>
            <Hero/>
             <div className="container">
               <Title title='OUR PROGRAM' subTitle='What we offer'/>
               <Programs/>
               <About setPlayState={setPlayState}/>
               <Campus/>
               <Testimonials/>
               <Title title='Contact us' subTitle='Get in Touch'/>
               <Contact/>
                 
                <Footer/>
                </div>
                  <VideoPlayer playState={playState}  setPlayState={setPlayState}/>
    </div>
     
     

   
  )
}

export default App;