import AnimatedLetters from '../AnimatedLetters'
import { useState, useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { profile } from '../../data/profile'

const Contact = () => {
  const [letterClass] = useState('text-animate')
  const [status, setStatus] = useState(null)
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus({ state: 'sending', message: 'Sending…' })

    emailjs
      .sendForm(
        'service_fsjq18x',
        'template_w3je4u1',
        refForm.current,
        'uw2HH9HRfgaBUBxL4'
      )
      .then(
        () => {
          setStatus({
            state: 'sent',
            message: 'Thank you — your message is on its way.',
          })
          refForm.current.reset()
        },
        () => {
          setStatus({
            state: 'error',
            message: `Something went wrong. Please email me directly at ${profile.email}.`,
          })
        }
      )
  }

  return (
    <div className="container contact-page">
      <div className="contact-grid">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Contact me']}
              idx={15}
            />
          </h1>

          <p>
            I am open to roles and collaborations in data engineering, research
            analytics and open-source investigation — and freelance work on
            ambitious projects is welcome. If you have a dataset that needs a
            home, a question that needs answering, or anything else, write to
            me.
          </p>

          <p>
            Tell me what the data is, where it comes from and what decision it
            needs to support — that is usually enough for me to say whether I
            can help.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li className="form-actions">
                  {status && (
                    <span className={`form-status ${status.state}`}>
                      {status.message}
                    </span>
                  )}
                  <input
                    type="submit"
                    className="flat-button"
                    value="Send"
                    disabled={status?.state === 'sending'}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <aside className="contact-aside">
          <div className="info-card">
            <span className="eyebrow">Details</span>
            <h2>{profile.name}</h2>
            <p className="info-role">{profile.role}</p>

            <dl>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
              <dt>Location</dt>
              <dd>{profile.city}</dd>
            </dl>

            <div className="info-socials">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              <a href={profile.links.twitter} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} /> X
              </a>
            </div>
          </div>

          <div className="map-wrap">
            <MapContainer
              center={profile.coords}
              zoom={12}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={profile.coords}>
                <Popup>{profile.city}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Contact
