import React from 'react'
import './Hero.css';
// import profile_img from '../../assets/profile_img.svg'
import profile_rukmini1 from '../../assets/profile-rukmini1.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/Rukmini Bongu.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_rukmini1} alt='img'/>
      <h1><span>I'm Rukmini,</span> frontend developer</h1>
      <p>I am a frontend developer from Hyderabad, Telangana with 2+ years of experience in Bitkemy Technologies Pvt Ltd.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a> </div>
      </div>
    </div>
  )
}

export default Hero
