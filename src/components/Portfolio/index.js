import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import './index.scss'

const Portfolio = () => {
  const [letterClass] = useState('text-animate')

  const skillArray = ['S', 'k', 'i', 'l', 'l', 's', ' ', '&']
  const expArray = ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']

  return(
    <div className='container portfolio-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
          strArray={skillArray}
          idx={15}
          />
          <br />
          <AnimatedLetters
          letterClass={letterClass}
          strArray={expArray}
          idx={22}
          />
        </h1>
        <p>
          Expert in data analytics and visualization including basic technologies like Excel, MSAccess SPSS to advanced tools SQL, PostgreSQL, R, Python, PowerBI, D3js, Google Cloud Platform, Git, Flourish, DataWrapper, etc.
        </p>
        <p>
          I love extracting insights from data, simplifying finding into precise and accurate visuals which are easy to understand and communicate expident info necessary for decision making to clients. I have worked with data that affect, influence and used to advice both internal  stakeholders and external consulting clients.
        </p>
        <p>
          Visit my LinkedIn profile for more details. Also you can checkout my cv on this link.
        </p>
      </div>
    </div>
  )
}

export default Portfolio