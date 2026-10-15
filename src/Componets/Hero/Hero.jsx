import AnchorLink from 'react-anchor-link-smooth-scroll'
import profileImage from '../../assets/profile-rukmini1.jpeg'
import resume from '../../assets/Rukmini Bongu.pdf'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow"><span /> Frontend developer · Hyderabad, India</p>
        <h1 id="hero-title">
          I build thoughtful
          <br />
          <span>digital experiences.</span>
        </h1>
        <p className="hero-description">
          I&apos;m Rukmini, a frontend developer with 4+ years of experience turning
          ideas into responsive, polished web experiences.
        </p>
        <div className="hero-actions">
          <AnchorLink className="button button-primary" href="#contact">
            Let&apos;s work together <span aria-hidden="true">↗</span>
          </AnchorLink>
          <a className="button button-secondary" href={resume} target="_blank" rel="noreferrer">
            View my resume <span aria-hidden="true">↓</span>
          </a>
        </div>
        <a className="hero-scroll" href="#about">
          <span aria-hidden="true">↓</span> A little about me
        </a>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <img src={profileImage} alt="Rukmini Bongu" />
        </div>
        <div className="hero-note">
          <span className="hero-note-dot" />
          <div>
            <strong>Open to opportunities</strong>
            <span>Let&apos;s make something meaningful</span>
          </div>
        </div>
        <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero
