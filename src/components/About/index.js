import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faHtml5, faJsSquare, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const About = () => {

  const [letterClass] = useState('text-animate')

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          idx={15}
          />
        </h1>
        <p>
          I am self-driven, contemplative coder in data analytics. Having a Bachelors Honours in Actuarial Science gives me the perfect base for analyzing and interprating data into summarize beneficial for conclusive and apt decision making.
        </p>
        <p>
          Consistently rewarded for success in planning and operational improvements in streamlining business process and conversion of the same into system processes.
        </p>
        <p>
          I am confident, naturally curious, and ever working to be productive and offer obligatory value, consistently so, solving one task efficiently per time.
          I am a family person, I love mountain climbing and growth oriented.
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color="#DD0031" />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color="#DD0031" />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About