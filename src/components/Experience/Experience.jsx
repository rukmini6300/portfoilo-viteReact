import SectionHeader from '../SectionHeader/SectionHeader'
import { education, experience } from '../../data/profile'
import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="experience section-shell" aria-labelledby="experience-title">
      <SectionHeader
        id="experience-title"
        kicker="Experience"
        title="Where I've been"
        highlight="building."
        description="Four years shipping production frontends for enterprise ERP products, working closely with design, product and backend teams."
      />

      <div className="experience-layout">
        <ol className="experience-timeline">
          {experience.map(({ company, role, period, projects }) => (
            <li className="experience-entry" key={company}>
              <header className="experience-entry-header">
                <div>
                  <h3>{role}</h3>
                  <p>{company}</p>
                </div>
                <span className="experience-period">{period}</span>
              </header>

              <div className="experience-projects">
                {projects.map(({ name, summary, highlights, stack }) => (
                  <article className="experience-project" key={name}>
                    <h4>
                      {name} <span>— {summary}</span>
                    </h4>
                    <ul className="experience-highlights">
                      {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <ul className="tag-list" aria-label={`${name} technologies`}>
                      {stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <aside className="experience-education" aria-labelledby="education-title">
          <h3 id="education-title">Education & certification</h3>
          <ul>
            {education.map(({ title, institution, period }) => (
              <li key={title}>
                <span>{period}</span>
                <strong>{title}</strong>
                <p>{institution}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Experience
