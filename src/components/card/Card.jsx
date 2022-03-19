import React from 'react'
import './card.css'

const Card = ({img,title,desc,discount}) => {
  return (
    <div className='card'>
      <div className='card__image'>
        <img src={img} alt="product Image" />
        <div className='card__discount'>
          <h2>Extra</h2>
          <h1>{discount}% <span>off</span></h1>
        </div>
      </div>
        <div className='card__content'>
        <p>{title}</p>
        <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card