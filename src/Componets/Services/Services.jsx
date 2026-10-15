import servicesData from '../../assets/services_data'
import './Services.css'

function Services() {
  return (
    <section id="services" className="services section-shell" aria-labelledby="services-title">
      <div className="section-title">
        <p className="section-kicker">What I do</p>
        <h2 id="services-title">From concept to <span>clean code.</span></h2>
      </div>
      <div className="services-grid">
        {servicesData.map(({ s_no, s_name, s_desc }) => (
          <article className="service-card" key={s_no}>
            <span className="service-number">{s_no}</span>
            <h3>{s_name}</h3>
            <p>{s_desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
