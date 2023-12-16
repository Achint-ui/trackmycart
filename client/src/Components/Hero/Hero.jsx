import React from 'react'
import './Hero.css'
import hero_logo from '../Assets/trackmycart-logo.jpg'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-left">
          <div className="hero-left-text">
          <h1>KNOW YOUR CART!</h1>
            <p>No need to wonder cluelessly in search of
              your SABJIWAALA anymore.
              
            </p>
            <p>We will connect you to your favorite BHAIYA/AUNTY!</p>
          </div>
           
        </div>
        <div className="hero-right">
           <img src={hero_logo} alt="" className='hero-logo' />
        </div>
        
    </div>
  )
}

export default Hero