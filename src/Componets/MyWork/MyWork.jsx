import myworkData from '../../assets/mywork_data'
import './MyWork.css'

function MyWork() {
  return (
    <section id="work" className="mywork section-shell" aria-labelledby="work-title">
      <div className="section-title">
        <p className="section-kicker">Selected work</p>
        <h2 id="work-title">A few things I&apos;ve <span>built.</span></h2>
      </div>
      <div className="mywork-grid">
        {myworkData.map((work) => (
          <a
            className="project-card"
            key={work.w_no}
            href={work.w_url}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${work.w_name} project (opens in a new tab)`}
          >
            <div className="project-image">
              <img src={work.w_img} alt={`${work.w_name} project preview`} loading="lazy" />
              <span className="project-open" aria-hidden="true">↗</span>
            </div>
            <div className="project-caption">
              <div>
                <h3>{work.w_name}</h3>
                <p>{work.w_type}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default MyWork
