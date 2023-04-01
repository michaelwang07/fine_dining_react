import React from 'react'
import './newsletter.css'
import Subheading from '../Subheading/Subheading'

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <Subheading title="Newsletter"/>
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='Email Address'  />
        <button type='button' className='custom__button'>
        Subscribe
        </button>
      </div>
    </div>
  )
}

export default Newsletter