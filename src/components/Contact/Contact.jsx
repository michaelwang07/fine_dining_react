import React from 'react'
import './contact.css'
import { images } from '../../assets/exports/images'
import Subheading from '../../templates/Subheading/Subheading'

const Contact = () => {
  return (
    <div className='app__contact section__padding app__bg flex__center'>
      <div className='app__contact-info'>
        <Subheading title='Contact' />
        <h1 className='headtext__cormorant'>Find Us</h1>
        <p className='app__contact-info_description p__cormorant'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h4>Opening Hours</h4>
        <p className='open-hours'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='open-hours'>Sat - Sun: 10:00 am - 03:00 am</p>
        <button type='button' className='custom__button'>Visit Us</button>
      </div>
      <div className='app__contact-img'>
        <img src={images.findus} alt="find us" />
      </div>
    </div>
  )
}

export default Contact