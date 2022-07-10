import AnimatedLetters from '../AnimatedLetters'
import { useState, useRef } from 'react';
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

const Contact = () => {
  const [letterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm (
        'service_fsjq18x',
        'template_w3je4u1',
        refForm.current,
        'uw2HH9HRfgaBUBxL4'
      )
      .then(
        () => {
          alert('Message succesfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the mail, please try again')
        }
      )
  }
  return (
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
            />
          </h1>
          <p>
            I am interested in rising opportunities to serve as a data analyst. Freelance opportunities - ambitious projects, are welcome. However, if you have other request or question, don't hesitate to contact me:
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject' required/>
                </li>
                <li>
                  <textarea placeholder='message' name='message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Musebe Ivan,
          <br />
          Nairobi, Kenya
          <br />
          <span>musebeivan@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[-1.2982870552468233, 36.79306714209674]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[-1.2982870552468233, 36.79306714209674]}>
                <Popup>I work here 😀</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
  )
}

export default Contact