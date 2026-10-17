import SectionHeader from '../SectionHeader/SectionHeader'
import projects from '../../data/projects'
import { profile } from '../../data/profile'
import './MyWork.css'

function MyWork() {
  return (
    <section id="work" className="mywork section-shell" aria-labelledby="work-title">
      <SectionHeader
        id="work-title"
        kicker="Selected work"
        title="Projects I've"
        highlight="built."
        description="Alongside my enterprise ERP work, these personal projects show my approach to responsive UI and clean implementation."
      />
      <div className="mywork-grid">
        {projects.map(({ id, name, category, description, image, url }) => (
          <a
            className="project-card"
            key={id}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${name} project (opens in a new tab)`}
          >
            <div className="project-image">
              <img src={image} alt="" width="840" height="560" loading="lazy" decoding="async" />
              <span className="project-open" aria-hidden="true">↗</span>
            </div>
            <div className="project-caption">
              <p className="project-category">{category}</p>
              <h3>{name}</h3>
              <p className="project-description">{description}</p>
            </div>
          </a>
        ))}
      </div>
      <a className="mywork-more" href={profile.github} target="_blank" rel="noreferrer">
        See more on GitHub <span aria-hidden="true">↗</span>
      </a>
    </section>
  )
}

export default MyWork
