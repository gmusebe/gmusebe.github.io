import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/LogoS_.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
  faMicrophoneLines,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { profile } from '../../data/profile'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/" aria-label="Ivan Musebe — home">
      <img src={LogoS} alt="Ivan Musebe logo" />
    </Link>

    <nav>
      <NavLink end to="/" aria-label="Home">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink className="about-link" to="/about" aria-label="About">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink className="portfolio-link" to="/portfolio" aria-label="Portfolio">
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink
        className="speaking-link"
        to="/speaking"
        aria-label="Talks & advisory"
      >
        <FontAwesomeIcon icon={faMicrophoneLines} color="#4d4d4e" />
      </NavLink>
      <NavLink className="contact-link" to="/contact" aria-label="Contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href={profile.links.linkedin}
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href={profile.links.github}
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href={profile.links.twitter}
          aria-label="X / Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
