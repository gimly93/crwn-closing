import React from 'react'
import './menu-tem.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
  <div className={`menu-item ${size}`}>
    <div className={'background-image'}
      style={{
      backgroundImage: `url(${imageUrl})`,
    }}/>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <spam className="subtitle">SHOP NOW</spam>
    </div>
  </div>
)

export default MenuItem
