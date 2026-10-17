import { profile } from '../../data/profile'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <a className="footer-brand" href="#home">{profile.shortName}<span>.</span></a>
          <p>{profile.role} · {profile.focus} · {profile.location}</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href="#experience">Experience</a>
          <a href="#home">Back to top ↑</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React &amp; Vite.</span>
      </div>
    </footer>
  )
}

export default Footer
