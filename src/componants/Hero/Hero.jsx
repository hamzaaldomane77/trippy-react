import React from 'react'
import './Hero.css'
export default function Hero({image , title ,   dec , btn}) {
  return (
    <div className='hero'>
<img src={image} alt="" />
<div className='info'>
    <h1>{title}</h1>
    <p>{dec}</p>
    <button><h2>{btn}</h2></button>
</div>
    </div>
  )
}
