import React from 'react'
import './laurels.css'
import { images } from '../../assets/exports/images'
import data from '../../assets/exports/data'
import Subheading from '../../templates/Subheading/Subheading'

const AwardCard = ({ award: { imgUrl, title, subtitle }}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="award" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color: '#DCCA87'}}>{title}</p>
      <p className='p__cormorant' >{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => {
  return (
    <div className='app__laurels app__wrapper app__bg section__padding' id="awards">
      <div className='app__wrapper_info'>
        <Subheading title='Awards & recognition' />
        <h1 className='headtext__cormorant'>Our Laurels</h1>
        <div className='app__laurels_awards'>
          {data.awards.map((award) => (<AwardCard award={award} key={award.title}/>))}
        </div>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.laurels} alt="laurels " />
      </div>
    </div>
  )
}

export default Laurels