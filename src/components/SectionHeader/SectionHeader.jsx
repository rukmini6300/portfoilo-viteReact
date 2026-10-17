import PropTypes from 'prop-types'

function SectionHeader({ id, kicker, title, highlight, description }) {
  return (
    <div className="section-title">
      <p className="section-kicker">{kicker}</p>
      <h2 id={id}>
        {title} <span>{highlight}</span>
      </h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

SectionHeader.propTypes = {
  id: PropTypes.string.isRequired,
  kicker: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default SectionHeader
