import React from 'react'
import './specialmenu.css'
import { images } from '../../assets/exports/images'
import data from '../../assets/exports/data'
import Subheading from '../../templates/Subheading/Subheading'
import Menuitem from '../../templates/Menuitem/Menuitem'

const SpecialMenu = () => {
  return (
    <div className='app__menu flex__center section__padding'>
      <div className='app__menu-title'>
        < Subheading title="Menu that fits you palatte"/>
        <div className='app__menu-title_main-title'>
          <h1 className='headtext__cormorant'>Today's Special</h1>
        </div>
      </div>
      <div className='app__menu-menu flex__center'>
        <div className='app__menu-menu_wine flex__center'>
          <p className='app__menu-menu_heading'>Wine & Beer</p>
          <div className='app__menu-menu_items'>
            {data.wines.map((wine, index) => (
              <Menuitem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>
        <div className='app__menu-menu_img'>
          <img src={images.menu} alt="menu image" />
        </div>
        <div className='app__menu-menu_cocktails flex__center'>
          <p className='app__menu-menu_heading'>Cocktails</p>
          <div className='app__menu-menu_items'>
            {data.cocktails.map((cocktail, index) => (
              <Menuitem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop:'15px'}} className='app__menu-button'>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
}

export default SpecialMenu