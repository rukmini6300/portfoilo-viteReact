import { useEffect, useState } from 'react'
import { navigation, profile } from '../../data/profile'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  // Allow keyboard users to dismiss the mobile menu with Escape.
  useEffect(() => {
    if (!isMenuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  return (
    <header className="navbar">
      <a className="nav-brand" href="#home" onClick={closeMenu} aria-label={`${profile.name}, home`}>
        {profile.shortName}<span>.</span>
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
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a className="nav-mobile-contact" href="#contact" onClick={closeMenu}>
          Get in touch
        </a>
      </nav>

      <a className="nav-contact" href="#contact">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Navbar
