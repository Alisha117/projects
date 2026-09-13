import React from 'react'
import './Campus.css'
import { useState } from 'react'
import campus1 from '../../assets/campus1.jpg'
import campus2 from '../../assets/campus2.jpg'
import campus3 from '../../assets/campus3.jpg'
import campus4 from '../../assets/campus4.jpg'
import arrow from '../../assets/arrow.png'
const Campus = () => {
  return (
    <div className='campus' id='campus'>
      <h1>Gallery</h1>
      <h3>CAMPUS PHOTOS</h3>
        <div className="gallery">
            <img src={campus1} alt=""/>
            <img src={campus2} alt=""/>
            <img src={campus3} alt=""/>
            <img src={campus4} alt=""/>
        </div>
           <button className='btn dark-btn'>See more here</button>
    </div>
  )
}

export default Campus;