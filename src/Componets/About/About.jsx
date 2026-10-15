import profileImage from '../../assets/profile-rukmini1.jpeg'
import './About.css'

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML & CSS',
  'Tailwind CSS',
  'SCSS',
  'Bootstrap',
  'React Native',
]

function About() {
  return (
    <section id="about" className="about section-shell" aria-labelledby="about-title">
      <div className="section-title">
        <p className="section-kicker">A little about me</p>
        <h2 id="about-title">Good work starts with <span>curiosity.</span></h2>
      </div>
      <div className="about-layout">
        <div className="about-photo">
          <img src={profileImage} alt="Rukmini Bongu" loading="lazy" />
          <span>Based in Hyderabad, India</span>
        </div>
        <div className="about-content">
          <p className="about-intro">
            I&apos;m a frontend developer with 4+ years of experience building
            clear, responsive interfaces for the web.
          </p>
          <p className="about-description">
            I enjoy taking an idea from its first sketch through to a thoughtful,
            reliable user experience. I care about clean implementation,
            accessible interactions, and the details that make a product feel
            considered on every screen.
          </p>
          <div className="about-skills">
            <h3>Tools I work with</h3>
            <ul>
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
          <div className="about-highlights">
            <div>
              <strong>4+</strong>
              <span>Years of experience</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Featured projects</span>
            </div>
            <div>
              <strong>IN</strong>
              <span>Working from Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
