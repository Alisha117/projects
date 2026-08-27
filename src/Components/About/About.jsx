import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpg'
import play_icon from '../../assets/play_icon.jpg'

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>  
         <div className='about-left' >
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
         </div>
         <div className='about-right' >
            <h3>About University</h3>
            <h2>Nurturing Tommorow's Leader Today</h2>
                <p>Embark on a transformative educational journey withour university's 
                comprehensive education programs. Our cutting-edge curriculam is designed
                to empower students with the knowledge, skills and experiences  needed
                to excel in the dynamic field of education.
                </p>
                <p>With a focus on innovation, hand on learning  and personalized mentorship,
                our programs prepare aspiring educators to make a meaningful impact in classrooms,
                schools and communities.
                </p>
                <p>
               Whether you aspire to become a teacher, administrator, counselor or educational leader,
               our diverse range of programs offers the perfect pathway to achieve  your goals and 
               unlock your full potentialin shaping the future education.
                </p>
         </div>
    </div>   
  )
}

export default About;