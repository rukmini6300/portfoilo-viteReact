import SectionHeader from '../SectionHeader/SectionHeader'
import useContactForm from '../../hooks/useContactForm'
import { profile } from '../../data/profile'
import mailIcon from '../../assets/mail_icon.svg'
import locationIcon from '../../assets/location_icon.svg'
import callIcon from '../../assets/call_icon.svg'
import './Contact.css'

const contactDetails = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: mailIcon },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: callIcon },
  { label: 'Location', value: profile.location, icon: locationIcon },
]

function Contact() {
  const { status, isSubmitting, message, handleSubmit } = useContactForm()

  return (
    <section id="contact" className="contact section-shell" aria-labelledby="contact-title">
      <SectionHeader
        id="contact-title"
        kicker="Get in touch"
        title="Let's build something"
        highlight="great together."
      />
      <div className="contact-layout">
        <div className="contact-intro">
          <h3>Open to frontend roles and collaborations.</h3>
          <p>
            Whether you&apos;re hiring for a React / TypeScript role or need help with a
            product interface, I&apos;d be glad to talk.
          </p>
          <ul className="contact-details">
            {contactDetails.map(({ label, value, href, icon }) => (
              <li key={label}>
                <span className="contact-icon">
                  <img src={icon} alt="" aria-hidden="true" />
                </span>
                <div>
                  <span>{label}</span>
                  {href ? <a href={href}>{value}</a> : <p>{value}</p>}
                </div>
              </li>
            ))}
          </ul>
          <a className="contact-github" href={profile.github} target="_blank" rel="noreferrer">
            {profile.github.replace('https://', '')} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            maxLength={100}
            required
          />
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            maxLength={254}
            required
          />
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Tell me about the role or project…"
            maxLength={5000}
            required
          />
          <button className="contact-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending message…' : 'Send message'}
            {!isSubmitting && <span aria-hidden="true">↗</span>}
          </button>
          <p className={`contact-status is-${status}`} role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
