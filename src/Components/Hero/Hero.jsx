import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate=useNavigate()
  return (
    <div className='hero'>
      <div className="hero-left">
      <h2>New Arrivals Only</h2>
      <div>
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt=''/>
        </div>
        <p>collections</p>
        <p>For every one</p>
      </div>
      <div className="hero-latest-btn">
        <div onClick={()=>navigate("/newcollection")}>Latest Collection</div>
        <img src={arrow_icon} alt=''/>
      </div>
      </div>
      <div className="hero-right">
      <img src={hero_image} alt=''/>
      </div>
    </div>
  )
}

export default Hero
