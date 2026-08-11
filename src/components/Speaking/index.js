import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDatabase,
  faBrain,
  faMagnifyingGlassChart,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons'
import { speaking, engagements } from '../../data/profile'

const TOPIC_ICONS = {
  data: faDatabase,
  ai: faBrain,
  investigations: faMagnifyingGlassChart,
  organizations: faSitemap,
}

const Speaking = () => {
  const [letterClass] = useState('text-animate')

  return (
    <div className="container speaking-page">
      <div className="speaking-intro">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[...'Talks &']}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[...'advisory']}
            idx={24}
          />
        </h1>

        <div className="text-zone">
          <p>{speaking.intro}</p>
          <Link to="/contact" className="flat-button">
            Invite me to speak
          </Link>
        </div>
      </div>

      <section className="section topics">
        <span className="eyebrow">What I speak about</span>
        <h2>Four subjects, one thread</h2>
        <p>
          Each of these stands on its own, but they are the same argument seen
          from four sides: data is only worth collecting if someone can act on
          it.
        </p>

        <div className="topic-grid">
          {speaking.topics.map((topic) => (
            <article className="topic-card" key={topic.key}>
              <span className="topic-icon">
                <FontAwesomeIcon icon={TOPIC_ICONS[topic.key]} />
              </span>
              <h3>{topic.title}</h3>
              <p>{topic.blurb}</p>
              <ul>
                {topic.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section formats">
        <span className="eyebrow">How we can work together</span>
        <h2>Formats</h2>

        <div className="format-grid">
          {speaking.formats.map((format, i) => (
            <div className="format-item" key={format.title}>
              <span className="format-number">{`0${i + 1}`}</span>
              <h3>{format.title}</h3>
              <p>{format.blurb}</p>
            </div>
          ))}
        </div>

        <div className="audiences">
          <span className="eyebrow">Who I work with</span>
          <ul>
            {speaking.audiences.map((audience) => (
              <li key={audience}>{audience}</li>
            ))}
          </ul>
        </div>
      </section>

      {engagements.length > 0 && (
        <section className="section engagements">
          <span className="eyebrow">On the record</span>
          <h2>Recent engagements</h2>
          <ul className="engagement-list">
            {engagements.map((item) => (
              <li key={`${item.title}-${item.year}`}>
                <span className="engagement-year">{item.year}</span>
                <span className="engagement-title">
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </span>
                <span className="engagement-event">{item.event}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="speaking-cta">
        <div>
          <h2>Have a room, a team or a problem?</h2>
          <p>
            Conferences, newsroom training, internal workshops or a standing
            advisory arrangement — tell me the audience and what you need them
            to leave with.
          </p>
        </div>
        <Link to="/contact" className="flat-button">
          Start a conversation
        </Link>
      </section>
    </div>
  )
}

export default Speaking
