import profileImage from '../../assets/profile-rukmini.webp'
import resume from '../../assets/Rukmini Bongu.pdf'
import { heroStats, profile } from '../../data/profile'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow">
          <span aria-hidden="true" /> {profile.role} · {profile.focus}
        </p>
        <h1 id="hero-title">
          Building scalable,
          <br />
          <span>high-performance</span> web apps.
        </h1>
        <p className="hero-description">
          I&apos;m {profile.shortName}, a frontend developer with {profile.experienceYears} years
          of experience crafting enterprise-grade React applications, from no-code ERP
          engines to reusable design systems.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Let&apos;s work together <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary" href={resume} target="_blank" rel="noreferrer">
            Download resume <span aria-hidden="true">↓</span>
          </a>
        </div>
        <dl className="hero-stats">
          {heroStats.map(({ value, label }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <img src={profileImage} alt={profile.name} width="640" height="675" />
        </div>
        <div className="hero-note">
          <span className="hero-note-dot" aria-hidden="true" />
          <div>
            <strong>Open to opportunities</strong>
            <span>{profile.location}</span>
          </div>
        </div>
        <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero
