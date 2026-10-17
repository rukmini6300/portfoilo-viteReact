import SectionHeader from '../SectionHeader/SectionHeader'
import { profile, profileFacts, strengths } from '../../data/profile'
import './About.css'

function About() {
  return (
    <section id="about" className="about section-shell" aria-labelledby="about-title">
      <SectionHeader
        id="about-title"
        kicker="About me"
        title="Engineering interfaces that"
        highlight="scale with the product."
      />
      <div className="about-layout">
        <aside className="about-card" aria-label="Profile at a glance">
          <div className="about-card-header">
            <span className="about-monogram" aria-hidden="true">RB</span>
            <div>
              <h3>{profile.name}</h3>
              <p>{profile.role}</p>
            </div>
          </div>
          <dl className="about-facts">
            {profileFacts.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
        <div className="about-content">
          <p className="about-intro">{profile.summary}</p>
          <p className="about-description">
            At Bitkemy Technologies I build the UI layer for Kagami, a no-code ERP platform,
            where dynamic, workflow-driven screens are rendered from configuration rather than
            hand-written pages. That work has shaped how I approach every product: invest in
            reusable components, keep state predictable with Redux Toolkit and Context API, and
            treat performance and accessibility as requirements, not afterthoughts.
          </p>
          <ul className="about-strengths">
            {strengths.map(({ title, description }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
