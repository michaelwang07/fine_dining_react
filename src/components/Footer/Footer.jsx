import React from 'react'
import './footer.css'
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import FooterOverlay from '../../templates/FooterComponent/FooterOverlay'
import Newsletter from '../../templates/FooterComponent/Newsletter'

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />
    </div>
  )
}

export default Footer