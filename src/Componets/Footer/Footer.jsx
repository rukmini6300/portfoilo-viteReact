import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <a className="footer-brand" href="#home">Rukmini<span>.</span></a>
      <p>Frontend developer building thoughtful digital experiences.</p>
      <div className="footer-links">
        <a href="mailto:bongurukmini1999@gmail.com">Email</a>
        <AnchorLink href="#work">Selected work</AnchorLink>
        <AnchorLink href="#home">Back to top ↑</AnchorLink>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Rukmini Bongu</span>
        <span>Designed & built with care.</span>
      </div>
    </footer>
  )
}

export default Footer
