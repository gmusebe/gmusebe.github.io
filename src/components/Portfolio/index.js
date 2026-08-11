import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { profile, projects, studyRepos } from '../../data/profile'

const Portfolio = () => {
  const [letterClass] = useState('text-animate')

  return (
    <div className="container portfolio-page">
      <div className="portfolio-intro">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[...'Selected work']}
            idx={15}
          />
        </h1>

        <div className="text-zone">
          <p>
            Warehouses, pipelines and analyses — most of it public on GitHub.
            Each project below is a repository you can read end to end: the
            modelling decisions, the transformations and the output they were
            built to support.
          </p>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <a
            className={`project-card${project.featured ? ' featured' : ''}`}
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="project-head">
              <span className="eyebrow">
                {project.featured ? 'Featured project' : 'Repository'}
              </span>
              <FontAwesomeIcon
                className="project-arrow"
                icon={faArrowUpRightFromSquare}
              />
            </span>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <span className="project-foot">
              <span className="project-lang">{project.language}</span>
              <span className="project-topics">
                {project.topics.slice(0, 3).join(' · ')}
              </span>
            </span>
          </a>
        ))}
      </div>

      <section className="section study">
        <span className="eyebrow">Also on the shelf</span>
        <h2>Forked for study</h2>
        <p>
          Repositories I keep around as working references rather than original
          work.
        </p>
        <ul className="study-list">
          {studyRepos.map((repo) => (
            <li key={repo.name}>
              <a href={repo.url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="portfolio-cta">
        <div>
          <h2>The full archive</h2>
          <p>
            Everything else — notebooks, experiments and work in progress —
            lives on GitHub.
          </p>
        </div>
        <a
          className="flat-button"
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> github.com/gmusebe
        </a>
      </section>
    </div>
  )
}

export default Portfolio
