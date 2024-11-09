import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';
import profile_rukmini1 from '../../assets/profile-rukmini1.jpeg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt='about'/>
      </div>
      <div className="about-sections">
        <div className="about-left">
        <img src={profile_rukmini1} alt='img' className='about-img'/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am experienced Frontend Developer with over a decade of professional expertise in the field.Throughout my career, I have had the privilege of collaborating with prestigious organizations.contributing to their success and growth. </p>
                <p>My passion for frontend development is not only refflected in my extensive experinece but also in the enthusiasm and dedication i bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"> <p>HTML & CSS</p><hr style={{width:'80%'}}/></div>
                <div className="about-skill"> <p>React JS</p><hr style={{width:'50%'}}/></div>
                <div className="about-skill"> <p>Javascript</p><hr style={{width:'60%'}}/></div>
                <div className="about-skill"> <p>React Native</p><hr style={{width:'40%'}}/></div>
                <div className="about-skill"> <p>Tailwind CSS & TypeScript & SCSS & Bootstrap</p><hr style={{width:'80%'}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2+</h1>
            <p>projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>1+</h1>
            <p>Happy Clients</p>
        </div>
      </div>
    </div>
  )
}

export default About
