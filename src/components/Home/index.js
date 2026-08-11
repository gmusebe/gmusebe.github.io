import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import { profile, disciplines } from '../../data/profile'

const Home = () => {
  const [letterClass] = useState('text-animate')

  const nameArray = [...'Ivan Musebe,']
  const jobArray = [...'research data engineer.']

  return (
    <div className="container home-page">
      <div className="home-hero">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={30}
            />
          </h1>

          <h2>Data infrastructure · Analysis · Open-source intelligence</h2>

          <p className="lede">{profile.tagline}</p>

          <div className="home-actions">
            <Link to="/portfolio" className="flat-button">
              View work
            </Link>
            <Link to="/speaking" className="flat-button ghost">
              Talks &amp; advisory
            </Link>
            <Link to="/contact" className="flat-button ghost">
              Get in touch
            </Link>
          </div>

          <dl className="home-meta">
            <div>
              <dt>Based in</dt>
              <dd>{profile.city}</dd>
            </div>
            <div>
              <dt>Working in</dt>
              <dd>SQL · Python · R</dd>
            </div>
            <div>
              <dt>Platforms</dt>
              <dd>AWS · GCP · Azure</dd>
            </div>
          </dl>
        </div>

        <div className="home-visual">
          <Logo />
        </div>
      </div>

      <div className="home-disciplines">
        {disciplines.map((discipline) => (
          <article className="discipline-card" key={discipline.title}>
            <h3>{discipline.title}</h3>
            <p>{discipline.blurb}</p>
            <span className="discipline-tools">
              {discipline.tools.slice(0, 4).join(' · ')}
            </span>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Home
