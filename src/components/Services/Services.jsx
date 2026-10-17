import SectionHeader from '../SectionHeader/SectionHeader'
import { services } from '../../data/profile'
import './Services.css'

function Services() {
  return (
    <section id="services" className="services section-shell" aria-labelledby="services-title">
      <SectionHeader
        id="services-title"
        kicker="What I bring"
        title="From concept to"
        highlight="production-ready code."
      />
      <div className="services-grid">
        {services.map(({ title, description }, index) => (
          <article className="service-card" key={title}>
            <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
