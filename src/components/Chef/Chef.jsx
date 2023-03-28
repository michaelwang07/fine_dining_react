import React from 'react'
import './chef.css'
import images from '../../assets/exports/images'
import Subheading from '../../templates/Subheading/Subheading'

const Chef = () => {
  return (
    <div className='app__chef app__bg section__padding app__wrapper'>
      <div className='app__chef-image'>
        <img src={images.chef} alt="chef's image" />
      </div>
      <div className='app__chef-words'>
        <div className='app__chef-words_subheading'>
          <Subheading title="Chef’s Word"/>
        </div>
        <div className='app__chef-words_heading'>
          <h1 className='headtext__cormorant'>What we believe in</h1>
        </div>
        <div className='app__chef-words_description'>
          <div className='app__chef-words_description_quote'>
            <img src={images.quote} alt="quote" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <div className='app__chef-words_description_words'>
            <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
          </div>
        </div>
        <div className='app__chef-words_chef-title'>
          <div className='app__chef-words_chef-name'>
            <h4>Kevin Luo</h4>
          </div>
          <div className='app__chef-words_chef-position'>
            <p className='p__opensans'>Chef & Founder</p>
          </div>
        </div>
        <div className='app__chef-words_chef-signature'>
          <img src={images.sign} alt="chef's signature" />
        </div>
      </div>
    </div>
  )
}

export default Chef