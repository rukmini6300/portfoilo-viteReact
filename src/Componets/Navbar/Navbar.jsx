import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'

const navigation = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'work' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar">
      <a className="nav-brand" href="#home" onClick={closeMenu} aria-label="Rukmini Bongu, home">
        Rukmini<span>.</span>
      </a>

      <button
        className="nav-menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`nav-menu${isMenuOpen ? ' is-open' : ''}`}
        aria-label="Main navigation"
      >
        {navigation.map(({ label, id }) => (
          <AnchorLink key={id} href={`#${id}`} onClick={closeMenu}>
            {label}
          </AnchorLink>
        ))}
        <AnchorLink className="nav-mobile-contact" href="#contact" onClick={closeMenu}>
          Get in touch
        </AnchorLink>
      </nav>

      <AnchorLink className="nav-contact" href="#contact">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </AnchorLink>
    </header>
  )
}

export default Navbar
