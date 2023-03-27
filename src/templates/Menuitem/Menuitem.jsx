import React from 'react'
import './menuitem.css'

const Menuitem = ({title, price, tags}) => {
  return (
    <div className='app__menuitem'>
      <div className='app__menuitem-main'>
        <div className='app__menuitem-name'>
          <p className='p__cormorant' style={{ color: '#DCCA87' }}> {title}</p>
        </div>
        <div className='app__menuitem-dash'/>
        <div className='app__menuitem-price'>
          <p className='p__cormorant' style={{ color: '#FFF' }}>{price}</p>
        </div>
      </div>
      <div className='app__menuitem-sub'>
        <p className='p__opensans'>
          {tags}
        </p>
      </div>
    </div>
  )
}

export default Menuitem