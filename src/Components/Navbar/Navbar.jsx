import React, { useEffect } from 'react'
import './Navbar.css'
import { useState } from 'react'
import { NavLink , Link} from 'react-router-dom';
import menu_icon from '../../assets/menu_icon.webp'

const Navbar = () => {

    const [sticky , setSticky] = useState(false);
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
      },[]);
        const [mobileMenu, setMobileMenu] = useState(false);
        const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

            }

  return (
   <nav className={`container ${sticky?'dark-nav':''}`}>
        
         <ul className={mobileMenu? '' : 'hide-mobile-menu' }>
            <li><a href="#hero" >Home</a></li>
            <li><a href="#programs" >Programs</a></li>
            <li><a href="#about" >About us</a></li>
            <li><a href="#campus" >Campus</a></li>
            <li><a href="#testimonials" >Testimonials</a></li>
            <li><a href="#contact" className='btn' >Contact us</a></li>
           
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar;