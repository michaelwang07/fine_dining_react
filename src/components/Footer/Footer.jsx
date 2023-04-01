import React from 'react'
import './footer.css'
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import FooterOverlay from '../../templates/FooterComponent/FooterOverlay'
import Newsletter from '../../templates/FooterComponent/Newsletter'
import images from '../../assets/exports/images'

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h2>Contact Us</h2>
          <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
          <p className='p__opensans'>+1 212-344-1230<br />
          +1 212-555-1230</p>
        </div>
        <div className='app__footer-links_logo'>
          <h1>Gerícht</h1>
          <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="spoon" />
          <div className='logos'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className='app__footer-links_hours'>
          <h2>Working Hours</h2>
          <p className='p__opensans'>Monday-Friday:<br />
          08:00 am -12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:<br />
          07:00am -11:00 pm</p>
        </div>
      </div>
      <div className='app__footer-rights'>
        <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer