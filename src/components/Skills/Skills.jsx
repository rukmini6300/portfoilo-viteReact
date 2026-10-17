import SectionHeader from '../SectionHeader/SectionHeader'
import { skillGroups } from '../../data/profile'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills section-shell" aria-labelledby="skills-title">
      <SectionHeader
        id="skills-title"
        kicker="Technical skills"
        title="The toolkit behind"
        highlight="the work."
      />
      <div className="skills-grid">
        {skillGroups.map(({ title, skills }) => (
          <article className="skill-group" key={title}>
            <h3>{title}</h3>
            <ul className="tag-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
