import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        {/* <div className="footer-top-left">
            <h1>Rukmini</h1>
            <img src="/src/assets/theme_pattern.svg" alt="about" />
            <img src={footer_logo} alt='footer'/>
            <p>I am frontend developer from, USA with 10 years of expeience in companies like Microsoft,Tesla and Apple</p>
        </div> */}
        <div  className="footer-top-left">
        <div className='footer-top-main'>
        <h1>Rukmini</h1>
        <img src={theme_pattern} alt='about'/>
      </div>
      <p>I am frontend developer from, Hyderabad with 2+ years of expeience in company like Bitkemy Technologies Pvt Ltd</p>
      </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt='footer'/>
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@2023 Rukmini Bongu.All rights reserved</p>
        <div className="footer-bottom-ri">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Contact with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
