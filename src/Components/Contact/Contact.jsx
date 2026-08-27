import React from 'react'
import './Contact.css'
import msg from '../../assets/msg.jpg'
import email_icon from '../../assets/email_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
const Contact = () => {

  return (
    <div className='contact' id='contact'>
                   
        <div className="contact-col">
            <h3>Send us a message<img src={msg} alt=""/></h3>
            <p>Feel free to reach out through contact form or find our
                contact information below. Your feedback,questions and 
                suggestions are important for us as we strive to provide
                exceptional service to our university community.  
            </p>
            <ul>
                <li><img src={email_icon} alt=""/>Contact@Educity.com</li>
                <li><img src={phone_icon} alt=""/>+1 123-456-7890</li>
                <li><img src={location_icon} alt=""/>77 Massachusetts Ave,Cambridge <br/> MA 02139,United States</li>
            </ul>
        </div>
            <div className="contact-col">
                <form>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name='message'  rows="6" placeholder='Enter your message' required></textarea> 
                <button type='submit' className='btn dark-btn'>Submit now</button>
                </form>
                <span></span>
            
             </div>
    </div>
  )
}

export default Contact;