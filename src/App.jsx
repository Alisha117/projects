import { Outlet } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Campus from "./components/campus/Campus";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Programs from "./components/programs/Programs";
import Testimonials from "./components/testimonials/Testimonials";
import Title from "./components/title/Title";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import { useState } from "react";


function App() {
    
    const [ playState , setPlayState ] = useState(false);
         
  return (
   <div>
            <Navbar/>
            <Outlet/>
            
               <Title title='OUR PROGRAM' subTitle='What we offer'/>
               <Programs/>
               <About setPlayState={setPlayState}/>
               <Campus/>
               <Testimonials/>
               <Title title='Contact us' subTitle='Get in Touch'/>
               <Contact/>
                 <Footer/>
                  <VideoPlayer playState={playState}  setPlayState={setPlayState}/>
    </div>
     
     

   
  )
}

export default App;