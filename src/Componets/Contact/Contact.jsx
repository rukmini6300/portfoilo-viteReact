import { useState } from 'react'
import themePattern from '../../assets/theme_pattern.svg'
import mailIcon from '../../assets/mail_icon.svg'
import locationIcon from '../../assets/location_icon.svg'
import callIcon from '../../assets/call_icon.svg'
import './Contact.css'

const contactDetails = [
  {
    label: 'Email',
    value: 'bongurukmini1999@gmail.com',
    href: 'mailto:bongurukmini1999@gmail.com',
    icon: mailIcon,
  },
  {
    label: 'Phone',
    value: '+91 63003 94866',
    href: 'tel:+916300394866',
    icon: callIcon,
  },
  {
    label: 'Location',
    value: 'Hyderabad, India',
    icon: locationIcon,
  },
]

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmissionMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', '4bc3c996-6926-4376-bf86-74d546fff2f0')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      })

      if (!response.ok) {
        throw new Error(`Contact request failed with status ${response.status}`)
      }

      const result = await response.json()
      if (!result.success) {
        setSubmissionMessage('Your message could not be sent. Please try again or email me directly.')
        return
      }

      form.reset()
      setSubmissionMessage('Thanks for reaching out. I’ll be in touch soon.')
    } catch (error) {
      console.error('Unable to submit the contact form:', error)
      setSubmissionMessage('Something went wrong. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact section-shell" aria-labelledby="contact-title">
      <div className="section-title">
        <p className="section-kicker">Have a project in mind?</p>
        <h2 id="contact-title">Let&apos;s make something <span>great.</span></h2>
      </div>
      <div className="contact-layout">
        <div className="contact-intro">
          <img src={themePattern} alt="" aria-hidden="true" />
          <h3>I&apos;d love to hear from you.</h3>
          <p>
            Have a project, an opportunity, or just want to say hello? Send me a
            note and I&apos;ll get back to you as soon as I can.
          </p>
          <ul className="contact-details">
            {contactDetails.map(({ label, value, href, icon }) => (
              <li key={label}>
                <img src={icon} alt="" aria-hidden="true" />
                <div>
                  <span>{label}</span>
                  {href
                    ? <a href={href}>{value}</a>
                    : <p>{value}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
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
            placeholder="jane@example.com"
            maxLength={254}
            required
          />
          <label htmlFor="contact-message">How can I help?</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Tell me a little about your project..."
            maxLength={5000}
            required
          />
          <button className="contact-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending message…' : 'Send message'}
            {!isSubmitting && <span aria-hidden="true">↗</span>}
          </button>
          <p className="contact-status" role="status" aria-live="polite">
            {submissionMessage}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
