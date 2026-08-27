import React from 'react'
import './Programs.css'
import g1 from '../../assets/g1.jpg'
import g2 from '../../assets/g2.jpg'
import g3 from '../../assets/g3.jpg'
import grad from '../../assets/grad.png'
import master from '../../assets/master.jpg'
import postgrad from '../../assets/postgrad.jpg'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        
        <div className="program">
            <img src={g1} alt=""/>
            <div className='caption'>
                <img src={grad} alt=""/>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={g2} alt=""/>
            <div className='caption'>
                <img src={master} alt=""/>
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={g3} alt=""/>
            <div className='caption'>
                <img src={postgrad} alt=""/>
                <p>Post Graduation</p>
            </div>
        </div>

    </div>
  )
}

export default Programs;